/** @jsx jsx */
import OneSignal, { useOneSignalSetup } from 'react-onesignal'
import {
  Fragment,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useCallback,
} from 'react'
import { Button } from './Button'
import { TFunction } from 'next-i18next'
import { withTranslation, useTranslation } from '../i18n'
import { useIsClient } from '../hooks/useIsClient'
import { useInterval } from '../hooks/useInterval'
import { useIsMounted } from '../hooks/useIsMounted'
import Modal from 'react-modal'
import { opacify } from 'polished'
import { jsx, ClassNames } from '@emotion/core'
import { colors } from '../constants/colors'
import serialize from 'form-serialize'
Modal.setAppElement('#__next')

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

const Mail: React.FunctionComponent = () => {
  const [modal, setModal] = useState(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  const { t } = useTranslation()
  const submit = useCallback(e => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: serialize(e.target),
    })
      .then(() => console.log('Success!'))
      .catch(error => console.error(error))
  }, [])

  return (
    <Fragment>
      <Button onClick={openModal}>{t('notifications')}</Button>
      <ClassNames>
        {({ css }) => (
          <Modal
            overlayClassName={css`
              position: fixed;
              min-width: 100vw;
              min-height: 100vh;
              display: flex;
              background-color: ${opacify(-0.25, colors.neutral.low)};
              top: 0;
              left: 0;
              justify-content: center;
              align-items: center;
            `}
            css={css`
              background: ${colors.neutral.highest};
              margin: 1rem 1rem 2rem;
              max-width: calc(50rem);
              padding: 1rem 2rem;
              border-radius: 1rem;
              width: 100%;
              outline: none;
            `}
            isOpen={modal}
            onRequestClose={closeModal}
          >
            <h1>Il tuo browser non supporta le notifiche!</h1>
            <h3>Oppure ha un ad-block di quelli potenti!</h3>
            <br />
            <form name="notifications" data-netlify="true" onSubmit={submit}>
              <label htmlFor="email">Prova a lasciarci un'email</label>
              <input type="hidden" name="form-name" value="notifications" />
              <input type="email" name="email" id="email" />
            </form>
          </Modal>
        )}
      </ClassNames>
    </Fragment>
  )
}

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
          console.log(e)
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
