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
import { jsx, ClassNames, keyframes } from '@emotion/core'
import { colors } from '../constants/colors'
import serialize from 'form-serialize'
Modal.setAppElement('#__next')

const animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

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
  const [loading, setLoading] = useState<boolean | null>(null)
  const submit = useCallback(e => {
    if (e.target.checkValidity()) {
      setLoading(true)
      e.preventDefault()
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: serialize(e.target),
      })
        .then(() => {
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
          setLoading(null)
        })
    }
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
              animation: 300ms ${animation};
              font-size: 1.2rem;
              background: ${colors.main.neutral};
              margin: 1rem 1rem 2rem;
              max-width: calc(50rem);
              padding: 1rem 2rem;
              border-radius: 1rem;
              width: 100%;
              outline: none;
              text-align: center;
              position: relative;
            `}
            isOpen={modal}
            onRequestClose={closeModal}
          >
            {loading !== null && (
              <div
                css={css`
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  background-color: ${colors.main.neutral};
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  z-index: 1;
                `}
              >
                {loading ? (
                  t('loading')
                ) : (
                  <div>
                    <h1>{t('awesome')}!</h1>
                    <Button onClick={closeModal}>{t('close')}</Button>
                  </div>
                )}
              </div>
            )}
            <Fragment>
              <h1>{t('notsupported')}!</h1>
              <h3>{t('notsupportedor')}!</h3>
              <br />
              <form name="notifications" data-netlify="true" onSubmit={submit}>
                <label htmlFor="email">{t('leaveusemail')}</label>
                <br />
                <input type="hidden" name="form-name" value="notifications" />
                <input
                  css={css`
                    border: 2px solid transparent;
                    padding: 0.5rem 1rem;
                    min-width: 300px;
                    &:focus {
                      border: 2px solid ${colors.main.low};
                      outline: none;
                    }
                  `}
                  type="email"
                  name="email"
                  id="email"
                  required
                />
                <br />
                <br />
                <Button type="submit">{t('submit')}</Button>
                <Button onClick={closeModal}>{t('close')}</Button>
              </form>
            </Fragment>
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
