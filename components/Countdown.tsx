/** @jsx jsx */
import { useCallback, useEffect, useState } from 'react'
import { jsx } from '@emotion/core'
import { css, keyframes } from '@emotion/react'
import { colors } from '../constants/colors'
import { useTranslation } from '../i18n'

const enterAnimation = keyframes`
  from {
    width: 0vw;
  }
  to {
    width: 95vw;
  }
`

const enterAnimation2 = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Countdown: React.FunctionComponent<{ time: Date }> = ({
  time,
}) => {
  const { t, i18n } = useTranslation()
  const secondsInADay = 60 * 60 * 1000 * 24
  const updateCountdown = useCallback(() => {
    const countTo = time.getTime()
    const now = new Date().getTime()
    const timeDifference = countTo - now
    return Math.ceil((timeDifference / secondsInADay) * 1)
  }, [])

  const [countdown, setCountdown] = useState(null)

  useEffect(() => {
    setCountdown(updateCountdown())
    setInterval(() => setCountdown(updateCountdown()), secondsInADay * 1000)
  }, [])

  const positive = countdown && countdown > 0

  return (
    <div
      css={css`
        animation: ${enterAnimation} 1s 4.5s;
        animation-fill-mode: forwards;
        font-size: calc(2rem + (16 * 2) * (100vh - 320px) / (2400 - 320));
        overflow: hidden;
        width: 0%;
        will-change: width;
      `}
    >
      <div
        css={css`
          background-color: ${colors.neutral.highest};
          box-shadow: 0 2vw 0 ${colors.shadow};
          padding: 0.5em 0 1em;
          position: relative;
          width: 95vw;
          will-change: width;

          &::before,
          &::after {
            border-top: 2px dashed ${colors.main.neutral};
            content: '';
            display: block;
            left: 0%;
            position: absolute;
            top: 0.25em;
            width: 100%;
          }

          &::after {
            top: calc(100% - 0.25em);
          }
        `}
      >
        {positive ? (
          <>
            <h3
              css={css`
                font-size: calc(
                  0.8rem + (16 * 1) * (100vw - 320px) / (2400 - 320)
                );
              `}
            >
              {t('seeyou')} {positive ? t('inabout') : t('moreorless')}:
            </h3>
            <h2
              css={css`
                line-height: 0.8;
                position: relative;
                display: inline-block;
              `}
            >
              {countdown} {countdown === 1 ? t('day') : t('days')}
              <small
                css={css`
                  font-size: 0.27em;
                  position: absolute;
                  top: 100%;
                  width: auto;
                  ${i18n.language === 'it' ? 'right' : 'left'}: 0;
                  text-align: ${i18n.language === 'it' ? 'right' : 'left'};
                `}
              >
                {t('orthe')}
                <br />
                {time.toLocaleDateString()}
              </small>
            </h2>
          </>
        ) : (
          <h2
            css={css`
              margin-bottom: -0.5em;
            `}
          >
            {t('dontrushme')}!
          </h2>
        )}
      </div>

      <h3
        css={css`
          animation: ${enterAnimation2} 2s 4.5s forwards;
          font-size: calc(0.8rem + (8 * 1) * (100vw - 320px) / (1800 - 320));
          margin-bottom: 1em;
          padding-top: 2em;
          opacity: 0;
        `}
      >
        {t('meanwhile')}
      </h3>
    </div>
  )
}
