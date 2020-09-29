import OneSignal, { useOneSignalSetup } from 'react-onesignal'
import { useEffect, useState } from 'react'
import { Button } from './Button'
import { TFunction } from 'next-i18next'
import { withTranslation } from '../i18n'

const Notification = ({ t }: { readonly t: TFunction }) => {
  const [hasPush, setPush] = useState(false)
  const [isPushEnabled, setPushEnabled] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      OneSignal.initialize(process.env.onsignalKey, {
        subdomainName: 'piccologuaioap',
        safari_web_id: process.env.onesignalSafariKey,
        allowLocalhostAsSecureOrigin: true,
      })
    }
  }, [])

  useOneSignalSetup(() => {
    const init = async () => {
      const hasPush = await OneSignal.isPushNotificationsSupported()
      setPush(hasPush)
      const isPushEnabled = await OneSignal.isPushNotificationsEnabled()
      setPushEnabled(isPushEnabled)
    }
    init()
  })

  if (!hasPush) return null
  return (
    <Button onClick={OneSignal.registerForPushNotifications}>
      {isPushEnabled ? t('notificationsactived') : t('notifications')}
    </Button>
  )
}

Notification.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

const NotificaitonWithTranslation = withTranslation('common')(Notification)

export { NotificaitonWithTranslation as Notification }
