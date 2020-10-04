/** @jsx jsx */
import { jsx, ClassNames, keyframes } from '@emotion/core'
import { Fragment, useState, useCallback } from 'react'
import { Button } from '../Button'
import { useTranslation } from '../../i18n'
import Modal from 'react-modal'
import { opacify } from 'polished'
import { colors } from '../../constants/colors'
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

export const Mail: React.FunctionComponent = () => {
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
              width: 100vw;
              min-height: 100vh;
              display: flex;
              background-color: ${opacify(-0.25, colors.neutral.low)};
              top: 0;
              left: 0;
              justify-content: center;
              align-items: center;
              padding: 1rem;
            `}
            css={css`
              animation: 300ms ${animation};
              font-size: 1.2rem;
              background: ${colors.main.neutral};
              margin-bottom: 2rem;
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
