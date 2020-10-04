/** @jsx jsx */
import { useCallback, useEffect, useState } from 'react'
import { css, jsx, keyframes } from '@emotion/core'
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

export const Countdown: React.FunctionComponent<{ time: Date }> = ({
  time,
}) => {
  const { t } = useTranslation()
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

  return (
    <div
      css={css`
        animation: ${enterAnimation} 1s 4.5s;
        animation-fill-mode: forwards;
        font-size: calc(2rem + (16 * 2) * (100vh - 320px) / (2400 - 320));
        overflow: hidden;
        padding-bottom: 1em;
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
        <h3
          css={css`
            font-size: calc(0.8rem + (16 * 1) * (100vw - 320px) / (2400 - 320));
          `}
        >
          {t('seeyou')} {countdown ? t('inabout') : t('moreorless')}:
        </h3>
        <h2
          css={css`
            line-height: 0.8;
          `}
        >
          {countdown || `${time.getDay()} - ${time.getMonth()}`}{' '}
          {countdown && countdown === 1 ? t('day') : t('days')}
        </h2>
      </div>
    </div>
  )
}
