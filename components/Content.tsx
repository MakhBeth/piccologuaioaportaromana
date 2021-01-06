/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css, keyframes } from '@emotion/react'
import { FunctionComponent } from 'react'
import { useTranslation } from '../i18n'
import { Button } from './Button'
import { Notification } from './Notification'

import { Weigth } from '../svg/weigth'
import { Length } from '../svg/length'
import { colors } from '../constants/colors'
import { bornValues } from '../constants/bornValues'

const enterAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const info = css`
  max-width: 120px;
  color: ${colors.shadow};
  position: relative;
  svg {
    fill: ${colors.neutral.highest};
    width: 100%;
  }
`

const value = css`
  color: ${colors.neutral.lowest};
  display: block;
  position: absolute;
  font-size: 2.5rem;
  top: 40%;
  line-height: 0.7;
  font-weight: 800;
  width: 100%;
  text-align: center;
`

const shadow = css`
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 10%;
  left: 10%;
  > svg {
    fill: ${colors.shadow};
  }
`

export const Content: FunctionComponent<{ born?: boolean }> = ({ born }) => {
  const { t } = useTranslation()
  return (
    <section
      css={css`
        animation: ${enterAnimation} 1s 5s;
        animation-fill-mode: backwards;
        will-change: transform, opacity;
      `}
    >
      {bornValues.born && (
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            max-width: 500px;
            margin: 0 auto 2rem;
          `}
        >
          <div css={info}>
            <Weigth />
            <Weigth addcss={shadow} />
            <span css={value}>
              {bornValues.weigth}
              <br />
              KG
            </span>
          </div>
          <div css={info}>
            <span
              css={[
                value,
                css`
                  top: 50%;
                `,
              ]}
            >
              {bornValues.length}
              <br />
              CM
            </span>
            <Length />
            <Length addcss={shadow} />
          </div>
        </div>
      )}
      <Button
        as="a"
        href="https://www.amazon.it/baby-reg/davide-dipumpo-febbraio-2021-milano/1SYN7DGSB0SVY"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('babyregistry')}
      </Button>
      {!born && <Notification />}
    </section>
  )
}
