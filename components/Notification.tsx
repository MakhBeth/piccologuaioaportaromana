import OneSignal from 'react-onesignal'
import { useEffect, useState } from 'react'
import { Button } from './Button'

export const Notification = () => {
  const [initialized, initialize] = useState(false)
  const [hasPush, setPush] = useState(false)
  const [isPushEnabled, setPushEnabled] = useState(false)

  useEffect(() => {
    const init = async () => {
      try {
        if (typeof window !== 'undefined' && window.document) {
          await OneSignal.initialize(process.env.onsignalKey, {
            subdomainName: 'piccologuaioap',
            safari_web_id:
              'web.onesignal.auto.28be2e0f-48c0-43fd-877a-95cc3c6fc0d9',
            allowLocalhostAsSecureOrigin: true,
          })
        }
        initialize(true)
        const hasPush = await OneSignal.isPushNotificationsSupported()
        setPush(hasPush)
        const isPushEnabled = await OneSignal.isPushNotificationsEnabled()
        setPushEnabled(isPushEnabled)
      } catch (e) {
        console.error(e)
      }
    }
    init()
  }, [])

  return (
    <Button onClick={OneSignal.registerForPushNotifications}>
      {isPushEnabled ? 'Notifiche attivate' : 'Ricevi notifiche!'}
    </Button>
  )
}
