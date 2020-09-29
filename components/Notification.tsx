import OneSignal, { useOneSignalSetup } from 'react-onesignal'
import { useEffect, useState } from 'react'
import { Button } from './Button'

export const Notification = () => {
  const [hasPush, setPush] = useState(false)
  const [isPushEnabled, setPushEnabled] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      console.log(process.env.onesignalSafariKey)
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

  // if (!hasPush) return null
  return (
    <Button onClick={OneSignal.registerForPushNotifications}>
      {isPushEnabled ? 'Notifiche attivate' : 'Ricevi notifiche!'}
    </Button>
  )
}
