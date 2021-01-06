/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
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

const anim = keyframes`
  0% {
      background-position: left top, right bottom, left bottom, right   top;
    }
  100% {
    background-position: left 15px top, right 15px bottom , left bottom 15px , right   top 15px;
  }
`

export const Toto: React.FunctionComponent = () => {
  const [modal, setModal] = useState(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  const { t } = useTranslation()
  const { loading, submitted, submit } = useSubmit()

  return (
    <Fragment>
      <span
        css={css`
          position: relative;
          display: inline-block;
          margin: 1rem 2rem;
          z-index: 0;

          &::after {
            content: '';
            display: block;
            animation: ${anim} 1s infinite linear;
            background-image: linear-gradient(
                90deg,
                ${colors.main.low} 50%,
                transparent 50%
              ),
              linear-gradient(90deg, ${colors.main.low} 50%, transparent 50%),
              linear-gradient(0deg, ${colors.main.low} 50%, transparent 50%),
              linear-gradient(0deg, ${colors.main.low} 50%, transparent 50%);
            background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
            background-size: 15px 4px, 15px 4px, 4px 15px, 4px 15px;
            background-position: left top, right bottom, left bottom, right top;
            position: absolute;
            top: -1.5em;
            width: calc(100% + 2rem);
            height: calc(100% + 1.5rem);
            left: -1rem;
            z-index: -2;
          }
        `}
      >
        <small
          css={css`
            position: absolute;
            right: -0.5rem;
            top: -2rem;
            color: ${colors.neutral.low};
            background-color: ${colors.main.low};
            padding: 0 0.5em;
          `}
        >
          {t('news')}
        </small>
        <Button onClick={openModal}>Toto Gaia</Button>
      </span>
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
