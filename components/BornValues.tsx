/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from '@emotion/react'

import { Weigth } from '../svg/weigth'
import { Length } from '../svg/length'
import { bornValues } from '../constants/bornValues'
import { colors } from '../constants/colors'

const info = css`
  max-width: 120px;
  color: ${colors.main.low};
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
    fill: ${colors.shadow} !important;
  }
`

export const BornValues: React.FunctionComponent = () => {
  if (!bornValues.born) return null
  return (
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
  )
}
