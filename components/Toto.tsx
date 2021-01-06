/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment, useState } from 'react'
import { Button } from './Button'
import { useTranslation } from '../i18n'
import { colors } from '../constants/colors'
import { useSubmit } from '../hooks/useSubmit'
import { Modal } from './Modal'

const inputCont = css`
  margin: 0 0.5rem 2rem;
  width: calc(50% - 1rem);
  min-width: 260px;
  display: inline-block;
  text-align: left;
`
const input = css`
  border: 2px solid ${colors.main.lowest};
  padding: 0.5rem 1rem;
  width: 100%;
  &:focus {
    border: 2px solid ${colors.main.low};
    outline: none;
  }
`
export const Toto: React.FunctionComponent = () => {
  const [modal, setModal] = useState(true)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  const { t } = useTranslation()
  const { loading, submitted, submit } = useSubmit()

  return (
    <Fragment>
      <Button onClick={openModal}>Toto Gaia</Button>
      <Modal opened={modal} closeFn={closeModal}>
        {loading && (
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
            {t('loading')}
          </div>
        )}
        {submitted ? (
          <div>
            <h1>{t('awesome')}!</h1>
            <p>{t('wewillupdateyou')}</p>
            <Button onClick={closeModal}>{t('close')}</Button>
          </div>
        ) : (
          <Fragment>
            <h1>{t('letTheBetsBegin')}!</h1>
            <h3>{t('wellguessed')}!</h3>
            <p>{t('themosttoto')}</p>
            <br />
            <form name="toto" data-netlify="true" onSubmit={submit}>
              <input type="hidden" name="form-name" value="toto" />
              <div css={inputCont}>
                <label htmlFor="weigth">{t('myWeigth')}</label>
                <input
                  css={input}
                  type="string"
                  name="weigth"
                  id="weigth"
                  placeholder="5,2"
                  required
                />
              </div>

              <div css={inputCont}>
                <label htmlFor="length">{t('myLength')}</label>
                <input
                  css={input}
                  type="string"
                  name="length"
                  id="length"
                  required
                  placeholder="65"
                />
              </div>

              <div css={inputCont}>
                <label htmlFor="length">{t('yourId')}</label>
                <input
                  css={input}
                  type="string"
                  name="id"
                  id="id"
                  placeholder="Pippo!"
                  required
                />
              </div>
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
