/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment, useEffect, useState } from 'react'
import { TFunction } from 'next-i18next'

import { Button } from '../Button'
import { withTranslation } from '../../i18n'
import { useIsClient } from '../../hooks/useIsClient'

import { Mail } from './Mail'
import { OneSignalComponent } from './OneSignalComponent'

const Notifications = ({ t }: { readonly t: TFunction }) => {
  const isClient = useIsClient()
  const [hasPush, setPush] = useState(false)
  const [permission, setPermission] = useState<NotificationPermission>(
    'default'
  )
  const [notifications, askForNotifications] = useState(false)

  useEffect(() => {
    if (isClient && window && 'Notification' in window) {
      fetch('https://onesignal.com/api/v1/notifications')
        .then(() => {
          setPush(true)
          setPermission(Notification.permission)
        })
        .catch(e => {
          console.warn(e, 'onesignal blocked')
        })
    }
  }, [isClient])

  if (hasPush)
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

  return <Mail />
}

Notifications.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

const NotificaitonWithTranslation = withTranslation('common')(Notifications)

export { NotificaitonWithTranslation as Notification }
