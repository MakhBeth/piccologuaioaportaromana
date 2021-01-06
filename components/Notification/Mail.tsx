/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, useState } from 'react'
import { Button } from '../Button'
import { useTranslation } from '../../i18n'
import { colors } from '../../constants/colors'
import { useSubmit } from '../../hooks/useSubmit'
import { Modal } from '../Modal'
import { Loading } from '../Loading'

export const Mail: React.FunctionComponent = () => {
  const [modal, setModal] = useState(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  const { t } = useTranslation()
  const { loading, submit, submitted } = useSubmit()

  return (
    <Fragment>
      <Button onClick={openModal}>{t('notifications')}</Button>
      <Modal opened={modal} closeFn={closeModal}>
        {loading && <Loading />}
        {submitted ? (
          <div>
            <h1>{t('awesome')}!</h1>
            <p>{t('wewillupdateyou')}</p>
            <Button onClick={closeModal}>{t('close')}</Button>
          </div>
        ) : (
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
        )}
      </Modal>
    </Fragment>
  )
}
