/** @jsx jsx */
import OneSignal, { useOneSignalSetup } from 'react-onesignal'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { useIsClient } from '../../hooks/useIsClient'
import { useInterval } from '../../hooks/useInterval'
import { useIsMounted } from '../../hooks/useIsMounted'

export const OneSignalComponent: React.FunctionComponent<{
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
