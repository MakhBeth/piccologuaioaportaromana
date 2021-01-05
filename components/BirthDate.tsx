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

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

export const BirthDate: React.FunctionComponent<{ time: Date }> = ({
  time,
}) => {
  const { t, i18n } = useTranslation()

  return (
    <div
      css={css`
        animation: ${enterAnimation} 1s 4.5s;
        animation-fill-mode: forwards;
        font-size: calc(2rem + (16 * 2) * (100vh - 320px) / (2400 - 320));
        overflow: hidden;
        padding-bottom: 3rem;
        width: 0%;
        will-change: width;
      `}
    >
      <div
        css={css`
          background-color: ${colors.neutral.highest};
          box-shadow: 0 2vw 0 ${colors.shadow};
          padding: 0.5em 0;
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
          {t('andIwasBornThe')}:
        </h3>
        <h2
          css={css`
            line-height: 0.8;
            position: relative;
            display: inline-block;
          `}
        >
          <div
            css={css`
              display: inline-flex;
              > span {
                padding: 0 0.2em;
              }
            `}
          >
            <span>{time.getUTCDate()}</span>
            <small
              css={css`
                order: ${i18n.language === 'it' ? 0 : -1};
                padding: 0 0.2em;
                align-self: flex-end;
              `}
            >
              {t(months[time.getMonth()])}
            </small>
            <span>{time.getUTCFullYear()}</span>
          </div>
        </h2>
      </div>
    </div>
  )
}
