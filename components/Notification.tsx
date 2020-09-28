import OneSignal, { useOneSignalSetup } from 'react-onesignal'
import { useEffect, useState } from 'react'
import { Button } from './Button'

export const Notification = () => {
  const [hasPush, setPush] = useState(false)
  const [isPushEnabled, setPushEnabled] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      OneSignal.initialize(process.env.onsignalKey, {
        subdomainName: 'piccologuaioap',
        safari_web_id:
          'web.onesignal.auto.28be2e0f-48c0-43fd-877a-95cc3c6fc0d9',
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
      {isPushEnabled ? 'Notifiche attivate' : 'Ricevi notifiche!'}
    </Button>
  )
}
