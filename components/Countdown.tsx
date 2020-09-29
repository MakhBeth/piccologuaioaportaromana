/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'
import { TFunction } from 'next-i18next'
import { useCallback, useEffect, useState } from 'react'
import { colors } from '../constants/colors'
import { withTranslation } from '../i18n'

const enterAnimation = keyframes`
  from {
    width: 0vw;
  }
  to {
    width: 95vw;
  }
`

const Countdown = ({ time, t }: { time: Date; readonly t: TFunction }) => {
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
        width: 0%;
        overflow: hidden;
        padding-bottom: 1em;
      `}
    >
      <div
        css={css`
          background-color: ${colors.neutral.highest};
          box-shadow: 0 2vw 10px ${colors.shadow};
          padding: 0.5em 0 1em;
          width: 95vw;
          position: relative;

          &::before,
          &::after {
            width: 100%;
            border-top: 2px dashed ${colors.main.neutral};
            content: '';
            display: block;
            position: absolute;
            left: 0%;
            top: 0.25em;
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

Countdown.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

const CountdownWithTranslation: any = withTranslation('common')(
  Countdown as any
)

const a = () => <CountdownWithTranslation time={new Date()} />
export { CountdownWithTranslation as Countdown }
