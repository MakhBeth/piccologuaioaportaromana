import OneSignal from 'react-onesignal'
import { useEffect } from 'react'
import { Button } from './Button'

export const Notification = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      OneSignal.initialize(process.env.onsignalKey, {
        notifyButton: {
          enable: true,
        },
        subdomainName: 'piccologuaioap',
        safari_web_id:
          'web.onesignal.auto.28be2e0f-48c0-43fd-877a-95cc3c6fc0d9',
      })
    }
  }, [])

  if (!OneSignal.isPushNotificationsSupported()) return null
  return (
    <Button onClick={OneSignal.registerForPushNotifications}>
      Ricevi notifiche!
    </Button>
  )
}
