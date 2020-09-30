import OneSignal, { useOneSignalSetup } from 'react-onesignal'
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Button } from './Button'
import { TFunction } from 'next-i18next'
import { withTranslation } from '../i18n'
import { useIsClient } from '../hooks/useIsClient'
import { useInterval } from '../hooks/useInterval'
import { useIsMounted } from '../hooks/useIsMounted'

const OneSignalComponent: React.FunctionComponent<{
  setPermission: Dispatch<SetStateAction<NotificationPermission>>
}> = ({ setPermission }) => {
  const isClient = useIsClient()
  const isMounted = useIsMounted()
  useInterval(() => {
    if (isMounted && isClient && Notification) {
      setPermission(Notification.permission)
    }
  }, 1000)

  useEffect(() => {
    if (isClient) {
      OneSignal.initialize(process.env.onsignalKey, {
        subdomainName: 'piccologuaioap',
        safari_web_id: process.env.onesignalSafariKey,
        allowLocalhostAsSecureOrigin: true,
      })
    }
  }, [isClient])

  useOneSignalSetup(() => {
    OneSignal.registerForPushNotifications()
  })
  return null
}

const Notifications = ({ t }: { readonly t: TFunction }) => {
  const isClient = useIsClient()
  const [hasPush, setPush] = useState(false)
  const [permission, setPermission] = useState<NotificationPermission>(
    'default'
  )
  const [notifications, askForNotifications] = useState(false)

  useEffect(() => {
    if (isClient && Notification) {
      setPush(true)
      setPermission(Notification.permission)
    }
  }, [isClient])

  if (!hasPush) return null
  return (
    <Fragment>
      {notifications && permission === 'default' && (
        <OneSignalComponent setPermission={setPermission} />
      )}
      <Button onClick={() => askForNotifications(true)}>
        {permission === 'granted'
          ? t('notificationsactived')
          : t('notifications')}
      </Button>
    </Fragment>
  )
}

Notifications.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

const NotificaitonWithTranslation = withTranslation('common')(Notifications)

export { NotificaitonWithTranslation as Notification }
