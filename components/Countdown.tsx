/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'
import { useMemo } from 'react'
import { colors } from '../constants/colors'
import { opacify } from 'polished'

const enterAnimation = keyframes`
  from {
    width: 0vw;
  }
  to {
    width: 98vw;
  }
`

export const Countdown: React.FunctionComponent<{ time: Date }> = ({
  time,
}) => {
  const HowManyDays = useMemo(() => {
    const countTo = time.getTime()
    const now = new Date().getTime()
    const timeDifference = countTo - now

    const secondsInADay = 60 * 60 * 1000 * 24
    return Math.ceil((timeDifference / secondsInADay) * 1)
  }, [])

  return (
    <div
      css={css`
        animation: ${enterAnimation} 1s 4.5s;
        animation-fill-mode: forwards;
        font-size: calc(2rem + (16 * 2) * (100vw - 320px) / (2400 - 320));
        width: 0%;
        overflow: hidden;
        padding-bottom: 1em;
      `}
    >
      <div
        css={css`
          background-color: ${colors.neutral.highest};
          box-shadow: 0 2vw 10px ${opacify(-0.25, colors.main.low)};
          padding: 0.5em 0 1em;
          width: 98vw;
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
          Ci vedremo tra circa:
        </h3>
        <h2
          css={css`
            line-height: 0.8;
          `}
        >
          {HowManyDays} <small>giorni</small>
        </h2>
      </div>
    </div>
  )
}
