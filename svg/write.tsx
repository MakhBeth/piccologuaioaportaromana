/** @jsx jsx */
import { FunctionComponent } from 'react'
import { jsx, SerializedStyles } from '@emotion/core'
import { css, keyframes } from '@emotion/react'
import { colors } from '../constants/colors'

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) rotate(45deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
`

const toggle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  78% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(30deg);
  }
  82% {
    transform: rotate(-25deg);
  }
  84% {
    transform: rotate(20deg);
  }
  86% {
    transform: rotate(-15deg);
  }
  88% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0);
  }
`

const generateAppearCss = (delay: number, moreCss?: string) => css`
  animation: ${appear} 0.5s;
  animation-delay: ${delay}ms;
  animation-fill-mode: backwards;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center center;
  will-change: transform, opacity;
  ${moreCss}
`

export const Write: FunctionComponent<{ addcss: SerializedStyles }> = ({
  addcss,
}) => (
  <svg
    aria-labelledby="CIAO "
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 314 216"
    css={addcss}
  >
    <title id="CIAO">Ciao</title>
    <g
      css={css`
        fill: ${colors.neutral.lowest};
        max-width: 100%;
        overflow: hidden;
      `}
    >
      <g
        css={css`
          fill: ${colors.red};
        `}
      >
        <path
          css={generateAppearCss(3750)}
          d="M164.6,126.5c0-2.5,0.4-7.3-1.4-9.3c-1.7-2-3.9-0.5-5,1.3c-4.6,7-2.6,18.5-2.7,26.5c0,0.7,1.9,0.5,2.2,0.1
        c5.6-6.5,12.2-12.8,14.9-21.2c0.6-1.9,1.6-4.3-0.9-4.7c-3.4-0.6-7.5,5.2-9.3,7.2c-0.4,0.4,1.7,0.8,2.2,0.2c1.3-1.4,4.2-5.8,6.2-6
        c0.6-0.1,0.4,0.1,0.2,1.4c-0.9,4.4-3.4,8.7-6.2,12.2c-2.9,3.6-6.1,7.1-9.2,10.6c0.7,0,1.5,0.1,2.2,0.1c0-5.9-0.1-11.7,0.1-17.6
        c0.1-2.1,0.4-4,1.1-6c0.1-0.3,1.2-3.4,1.8-3.5c0.7-0.1,0.5,0.4,0.9,1.3c0.8,2.2,0.7,5,0.7,7.3
        C162.4,127.1,164.6,127.1,164.6,126.5z"
        />
      </g>
      <g
        css={css`
          animation: ${toggle} 10s infinite;
          transform-origin: 100% 90%;
          fill: ${colors.red};
        `}
      >
        <path
          css={generateAppearCss(3800)}
          d="M286.5,174.4c-1.5-2.1-10.6-12.3-10.2-3.9c0.2,4.9,3.1,8.7,5.8,12.6c2.4,3.5,4.9,7,7.3,10.6c0.3,0.4,2.1,0.6,2.2-0.1
    c0.9-8.8,2.7-17.9-0.2-26.5c-0.6-1.6-1.4-4-3.6-3.3c-3.2,1-3.1,8.5-3.4,10.8c-0.1,0.6,2.2,0.7,2.2,0c0.3-2.5,0.6-5.1,1.3-7.6
    c0.2-0.5,0.3-1.9,0.8-2.1c-0.7,0.3-0.4,0-0.1,0.8c1.6,4.5,2.4,9.1,2.1,13.9c-0.3,4.7-0.9,9.3-1.4,14c0.7,0,1.5-0.1,2.2-0.1
    c-3.3-4.8-6.9-9.5-10-14.4c-1.1-1.8-2-3.4-2.5-5.5c-0.3-1.1-1.3-5.1,0.2-4.7c1.8,0.5,4.1,4.4,5.2,5.9
    C284.7,175.2,286.9,174.9,286.5,174.4z"
        />
      </g>
      <g
        css={css`
          fill: ${colors.green};
        `}
      >
        <path
          css={generateAppearCss(3850)}
          d="M60.5,116.2c-2.4-3.2-4.9-6.5-7.3-9.7c-1.4-1.9-2.8-3.9-4.3-5.7c-0.2-0.3-1.1-1.1-1.1-1.4c0-0.1-0.5,0.7,0.3,0
    c1.2-1.1,3.4-1.7,4.8-2.4c2.4-1.2,4.8-2.4,7.2-3.6c3.4-1.7,6.7-3.4,10.1-5c1.1-0.5-1.1-0.9-1.6-0.6C61,91.4,53.4,95.2,45.8,99
    c-0.1,0.1-0.5,0.2-0.3,0.4c4.3,5.7,8.5,11.3,12.8,17C58.7,116.9,60.8,116.6,60.5,116.2L60.5,116.2z"
        />
      </g>
      <g
        css={css`
          fill: ${colors.yellow};
          transform: translateX(10px);
        `}
      >
        <path
          css={generateAppearCss(3900)}
          d="M46.5,59.1c-2.4,0.4-4.7,0.7-7.1,1.1c-1.6,0.2-5.1,0.1-6.5,1c-1.3,0.8-1.9,3.4-2.5,4.7c-1.1,2.4-2.2,4.7-3.4,7.1
    c0.7,0,1.4,0,2.2,0c-1.2-2.2-2.5-4.4-3.7-6.6c-0.7-1.2-1.7-4.1-2.9-5c-1.1-0.8-3.7-0.6-5-0.8c-2.7-0.4-5.8-0.4-8.5-1.1
    c-0.4-0.1,0.1,0.2,1-0.3c1.1-0.6,2.3-2.2,3.2-3.1c1.2-1.1,4.9-3.6,5.3-5.2c0.4-1.4-0.8-4.2-1.1-5.5c-0.5-2.4-1.1-4.9-1.6-7.3
    c-0.6,0.1-1.3,0.2-1.9,0.3c2.5,1.2,4.9,2.4,7.4,3.6c1.4,0.7,3.7,2.4,5.4,2.4c1.7,0,3.6-1.5,5.1-2.3c2.5-1.3,5-2.6,7.6-3.9
    c-0.6-0.1-1.3-0.2-1.9-0.3c-0.3,2.4-0.7,4.9-1,7.3c-0.2,1.4-1.1,4.2-0.6,5.6c0.5,1.4,3.6,3.2,4.7,4.2c1.8,1.6,3.6,3.2,5.4,4.8
    c0.4,0.4,2.6,0.1,1.9-0.5c-1.6-1.4-3.1-2.8-4.7-4.1c-1.2-1.1-4.8-3.2-5.3-4.7c-0.3-0.8,0.7-4.5,0.9-5.7c0.3-2.3,0.6-4.6,0.9-6.8
    c0.1-0.6-1.6-0.5-1.9-0.3c-1.9,1-3.9,2-5.8,3c-1.3,0.7-2.7,1.3-4,2.1c-1.9,1.2-1.8,0.2-0.3,0.9c-4-2-8.1-3.9-12.1-5.8
    c-0.3-0.1-2.1-0.3-1.9,0.3c0.5,2.1,0.9,4.2,1.4,6.3c0.3,1.5,1.8,4.8,1.4,6.3c-0.4,1.4-3.6,3.5-4.6,4.5c-1.5,1.5-3.1,3-4.6,4.5
    c-0.3,0.3,0.7,0.5,0.8,0.6c2.1,0.3,4.2,0.5,6.2,0.8c1.9,0.2,5.5,0,7.1,0.9c-1.3-0.7,0.1,1,0.3,1.5c0.6,1.2,1.3,2.4,2,3.5
    c1.2,2.1,2.3,4.1,3.5,6.2c0.3,0.5,1.9,0.5,2.2,0c0.9-1.9,1.8-3.9,2.7-5.8c0.6-1.3,1.4-2.6,1.9-4c0.1-0.4,1.4-2.4,0.2-1.5
    c1.2-0.9,5-0.7,6.5-1c2.2-0.3,4.4-0.7,6.6-1C48.6,59.8,47.4,59,46.5,59.1z"
        />
      </g>
      <g
        css={css`
          fill: ${colors.yellow};
          transform: translate(-8px, -10px);
        `}
      >
        <path
          css={generateAppearCss(
            3700,
            `
          animation-timing-function: ease-in-out;`
          )}
          d="M193.2,16.3c-1,0.6-3.2,1.3-3.9,2.3c-0.6,0.9-0.3,3.4-0.4,4.5c0.7-0.1,1.4-0.2,2.1-0.2c-1.1-1-2.4-2.9-3.9-3.2
    c-1.5-0.3-3.7,0.7-5.1,1c0.6,0.2,1.1,0.3,1.7,0.5c0.5-1,1.9-3,1.9-4.1c0-1.1-1.7-2.9-2.3-3.9c-0.5,0.2-0.9,0.4-1.4,0.6
    c1.4,0.2,3.8,0.9,5.2,0.5c1.4-0.5,2.5-2.5,3.4-3.6c-0.7,0-1.5-0.1-2.2-0.1c0.2,1.2,0.2,3.6,1,4.5c0.8,0.9,3.2,1.4,4.3,1.9
    c0.5,0.2,2.7-0.2,1.6-0.6c-0.7-0.3-1.3-0.6-2-0.9c-0.4-0.2-0.8-0.4-1.2-0.5c-0.2-0.1-0.8-0.5-0.6-0.2c-0.3-0.4-0.5-3.1-0.7-4.1
    c-0.1-0.7-1.9-0.5-2.2-0.1c-1,1.1-1.9,2.2-2.9,3.3c0.5-0.1,0.9-0.2,1.4-0.3c-1.5-0.2-2.9-0.3-4.4-0.5c-0.2,0-1.7,0-1.4,0.6
    c0.5,0.9,2.2,2.9,2.2,3.6c0,0.8-1.3,2.9-1.8,3.9c-0.3,0.7,1.4,0.6,1.7,0.5c1.4-0.3,2.8-0.7,4.3-1c-0.5-0.1-1-0.1-1.5-0.2
    c1.1,1,2.2,2,3.2,3c0.3,0.3,2,0.4,2.1-0.2c0.1-1-0.1-3.7,0.3-4.2c0.4-0.6,2.8-1.5,3.7-2.1C195.8,16.4,193.7,16,193.2,16.3z"
        />
      </g>
    </g>

    <g
      css={css`
        transform: translate(35px, -27px);
      `}
    >
      <path
        css={generateAppearCss(2800)}
        d="M67.8,39.2c-0.1-0.6-0.1-1.3,0-2.1c0.1-0.7,0.3-1.5,0.6-2.2s0.6-1.5,1-2.2s0.9-1.4,1.4-1.9c0.5-0.6,1.1-1.1,1.8-1.5
		c0.6-0.4,1.3-0.6,2-0.7c0.4-0.1,0.7,0,0.9,0.3s0.4,0.6,0.4,0.9c0,0.2,0,0.5,0,0.7c0,0.3-0.1,0.6-0.2,0.9c-0.1,0.3-0.3,0.5-0.4,0.8
		c-0.2,0.2-0.4,0.3-0.6,0.4c0-0.2,0-0.3,0-0.5s0.1-0.3,0.1-0.5c0.1-0.1,0.1-0.3,0.1-0.5c0-0.2,0-0.3,0-0.5c0-0.2-0.1-0.3-0.3-0.4
		c-0.2,0-0.4,0-0.6,0c0,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.1,0c-0.7,0.4-1.4,0.9-2,1.5c-0.6,0.6-1.2,1.2-1.7,1.9c-0.5,0.7-0.8,1.5-1,2.3
		c-0.2,0.8-0.3,1.6-0.1,2.5c0.1,0.6,0.2,1.1,0.4,1.8c0.2,0.6,0.5,1.2,0.8,1.7c0.3,0.5,0.8,0.9,1.3,1.2c0.5,0.3,1.1,0.4,1.8,0.3
		c0.6-0.1,1.1-0.2,1.6-0.4c0.5-0.2,1.1-0.4,1.6-0.6c0.5-0.2,1.1-0.4,1.6-0.6c0.5-0.2,1.1-0.3,1.6-0.4c0.1,0,0.3,0,0.4,0
		c0.1,0,0.2,0.1,0.2,0.3c0,0.1,0,0.2-0.1,0.3s-0.2,0.3-0.3,0.4c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.1-0.2,0.2l-5.4,2
		c0,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3,0.1c-0.5,0.1-1,0-1.5-0.1c-0.5-0.2-0.9-0.4-1.3-0.7c-0.4-0.3-0.7-0.7-1-1.1
		c-0.3-0.4-0.6-0.9-0.8-1.4c-0.2-0.5-0.4-1-0.6-1.5C68,40.1,67.9,39.6,67.8,39.2z"
      />
      <path
        css={generateAppearCss(2850)}
        d="M85.5,29.1c0-0.2,0-0.3,0.2-0.4c0.1-0.1,0.3-0.1,0.4-0.1c0.1,0,0.3,0,0.5,0.2c0.2,0.1,0.4,0.3,0.5,0.5
		c0.1,0.2,0.2,0.4,0.2,0.5c0,0.2-0.1,0.3-0.3,0.4l-0.1,0c-0.2,0-0.5,0-0.6,0c-0.2,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.2-0.2-0.3
		C85.6,29.6,85.6,29.4,85.5,29.1z M87.1,35.2c0-0.1,0-0.2,0-0.4c0-0.2,0-0.4,0-0.6c0-0.2,0-0.4,0-0.6c0-0.2,0-0.3,0-0.4
		c-0.1-0.5,0-0.8,0.4-0.8c0.2,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.3,0.4c0,0.9,0.1,1.7,0.2,2.5c0.2,0.8,0.4,1.6,0.6,2.3
		c0.2,0.8,0.4,1.5,0.6,2.3c0.2,0.8,0.3,1.6,0.3,2.4c0,0.2,0,0.5-0.2,0.7c-0.1,0.2-0.3,0.4-0.6,0.4c-0.2,0-0.4-0.2-0.6-0.5
		c-0.2-0.4-0.3-0.8-0.5-1.4c-0.1-0.6-0.3-1.2-0.4-1.9c-0.1-0.7-0.2-1.3-0.3-2c-0.1-0.6-0.1-1.2-0.2-1.7
		C87.2,35.7,87.2,35.4,87.1,35.2z"
      />
      <path
        css={generateAppearCss(2900)}
        d="M96,39.2c0-0.3,0.1-0.6,0.3-1c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.6,1.2-0.9c0.5-0.3,1.1-0.4,1.7-0.5
		c0.7-0.1,1.4-0.1,2.2,0c0.8,0.1,1.7,0.4,2.7,0.8c0,0,0-0.1,0-0.2l0-0.2c0-0.4-0.1-0.9-0.3-1.3c-0.2-0.5-0.5-0.9-0.9-1.2
		c-0.4-0.4-0.8-0.7-1.2-0.9s-0.9-0.4-1.3-0.4c-0.2,0-0.3,0-0.4,0.1c-0.1,0-0.2,0.1-0.4,0.2c-0.1,0.1-0.2,0.1-0.3,0.2
		c-0.1,0.1-0.2,0.1-0.4,0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.1-0.1-0.1-0.1c0-0.3,0.1-0.5,0.2-0.8
		c0.1-0.2,0.3-0.4,0.5-0.5s0.4-0.2,0.6-0.3s0.5-0.1,0.8-0.1c0.7,0.1,1.3,0.3,1.9,0.7c0.6,0.4,1.1,0.8,1.6,1.3
		c0.5,0.5,0.9,1.1,1.3,1.8c0.4,0.7,0.6,1.4,0.9,2.1c0.2,0.7,0.4,1.4,0.4,2.2c0.1,0.8,0.1,1.5,0,2.1c0,0-0.1,0-0.1,0
		c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.2,0l-0.1,0c-0.3-0.8-0.7-1.4-1.1-1.9c-0.4-0.5-0.8-0.9-1.2-1.2c-0.4-0.3-0.8-0.5-1.1-0.6
		c-0.4-0.1-0.7-0.2-0.9-0.3c-0.2,0-0.5,0-0.9,0c-0.3,0-0.7,0.1-1.1,0.1c-0.4,0.1-0.7,0.2-1.1,0.3c-0.4,0.1-0.7,0.3-1,0.5
		c-0.3,0.2-0.5,0.4-0.7,0.7s-0.3,0.6-0.3,0.9c0,0.4,0.1,0.7,0.4,1c0.3,0.3,0.7,0.5,1.1,0.7c0.4,0.2,0.9,0.3,1.3,0.4
		c0.5,0.1,0.8,0.1,1.1,0.1c0.5,0,0.9,0,1.4,0c0.4,0,0.9-0.1,1.3-0.1c0.4-0.1,0.9-0.1,1.3-0.1s0.9,0,1.3,0c0,0,0.1,0,0.2,0
		c0.1,0,0.2,0,0.3,0s0.2,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0.1,0.2,0.1,0.2,0.2c0,0.1,0,0.2,0,0.3s-0.1,0.2-0.3,0.3
		c-0.2,0.1-0.5,0.2-0.8,0.3c-0.3,0.1-0.7,0.2-1.1,0.3c-0.4,0.1-0.8,0.2-1.2,0.3c-0.4,0.1-0.7,0.1-1,0.2c-0.3,0-0.5,0.1-0.7,0.1
		c-0.7,0-1.4-0.1-2.2-0.2c-0.8-0.1-1.5-0.4-2.1-0.7c-0.6-0.3-1.1-0.8-1.5-1.3C96.1,40.7,95.9,40,96,39.2z"
      />
      <path
        css={generateAppearCss(2950)}
        d="M114,39.3c0.1-0.9,0.4-1.6,0.9-2.2c0.5-0.6,1.1-1.1,1.8-1.5c0.7-0.4,1.5-0.6,2.3-0.7c0.8-0.1,1.6-0.1,2.4,0
		c0.4,0.1,0.8,0.2,1.1,0.4s0.7,0.5,1,0.8c0.3,0.3,0.5,0.7,0.8,1.1c0.2,0.4,0.4,0.8,0.5,1.2c0.1,0.4,0.2,0.8,0.3,1.2s0,0.8,0,1.1
		c-0.1,0.8-0.4,1.5-0.8,2.1c-0.4,0.6-0.9,1.1-1.6,1.4c-0.6,0.4-1.3,0.6-2,0.7c-0.7,0.1-1.5,0.1-2.2,0c-0.7-0.1-1.4-0.3-2-0.7
		c-0.6-0.3-1.1-0.7-1.5-1.2c-0.4-0.5-0.7-1.1-0.8-1.7C113.9,40.7,113.9,40,114,39.3z M115.2,39.3c-0.1,0.5-0.1,1,0.1,1.5
		c0.1,0.5,0.3,0.9,0.6,1.3c0.3,0.4,0.6,0.7,1.1,1c0.4,0.3,0.9,0.4,1.4,0.5c0.3,0.1,0.6,0.1,1,0c0.4-0.1,0.8-0.2,1.3-0.4
		c0.4-0.2,0.9-0.4,1.3-0.7c0.4-0.3,0.8-0.6,1.1-1c0.3-0.4,0.5-0.8,0.6-1.2c0.1-0.4,0.1-0.9,0-1.3c-0.1-0.5-0.4-0.9-0.9-1.4
		c-0.5-0.5-1.2-1-2.1-1.4c-0.5-0.1-1.1-0.1-1.7,0c-0.6,0.1-1.2,0.2-1.7,0.5c-0.5,0.2-1,0.6-1.3,1C115.6,38.1,115.3,38.6,115.2,39.3z
		"
      />
      <path
        css={generateAppearCss(3000)}
        d="M129,50.9c0.1-0.4,0.2-0.8,0.4-1.1c0.2-0.4,0.3-0.7,0.5-1.1c0.2-0.4,0.4-0.8,0.5-1.1c0.2-0.4,0.3-0.8,0.4-1.1
		c0,0,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.3c0-0.1,0-0.2,0-0.3c0-0.1,0-0.1,0-0.2c-0.2,0-0.4-0.1-0.4-0.2c0-0.1,0-0.2,0-0.4
		c0.1-0.3,0.2-0.6,0.4-0.8c0.2-0.2,0.4-0.3,0.8-0.2c0.3,0.1,0.5,0.2,0.6,0.5c0.1,0.3,0.1,0.5,0.1,0.9s-0.1,0.6-0.1,0.9
		s-0.1,0.6-0.2,0.8c0,0.1-0.1,0.3-0.2,0.6c-0.1,0.3-0.2,0.6-0.4,1c-0.2,0.4-0.3,0.8-0.5,1.2c-0.2,0.4-0.4,0.8-0.6,1.1
		c-0.2,0.3-0.4,0.6-0.6,0.8s-0.4,0.3-0.6,0.2c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.1-0.1-0.2-0.1-0.2c0-0.1,0-0.2,0-0.3
		C129,51.1,129,51,129,50.9z"
      />
      <path
        css={generateAppearCss(3050)}
        d="M166.6,59.5c0,0,0.1-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2l0.1-0.1c0,0,0.1-0.2,0.2-0.4
		c0.1-0.2,0.2-0.4,0.4-0.6c0.1-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.3,0.2-0.4c0.1-0.3,0.2-0.8,0.4-1.3c0.1-0.6,0.2-1.1,0.2-1.7
		c0-0.6-0.1-1.1-0.2-1.6c-0.2-0.5-0.5-0.9-0.9-1.1c-0.4-0.2-0.9-0.3-1.4-0.3c-0.5,0-1.1,0.1-1.6,0.2c-0.5,0.1-1,0.4-1.4,0.7
		c-0.4,0.3-0.8,0.6-1,1.1c-0.1,0.2-0.2,0.5-0.2,0.7c0,0.3,0,0.5-0.1,0.7c0,0.2,0,0.5-0.1,0.8c0,0.3-0.1,0.5-0.2,0.7
		c-0.1,0.2-0.2,0.3-0.3,0.5c-0.1,0.1-0.4,0.2-0.6,0c-0.3-0.1-0.4-0.4-0.4-0.8c0-0.4,0-0.9,0.1-1.4c0.1-0.5,0.2-1.1,0.3-1.8
		c0.1-0.6,0.1-1.2,0.1-1.8c0-0.6-0.1-1.1-0.3-1.6c-0.2-0.5-0.5-0.8-1.1-1.1c-0.4-0.2-0.8-0.3-1.2-0.2c-0.4,0-0.8,0.1-1.1,0.3
		c-0.3,0.2-0.6,0.4-0.9,0.7s-0.5,0.6-0.7,1c-0.3,0.6-0.5,1.2-0.7,1.8c-0.2,0.6-0.4,1.2-0.7,1.8c-0.1,0.2-0.2,0.4-0.3,0.5
		c-0.1,0.2-0.3,0.2-0.6,0c-0.2-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.2,0-0.3,0-0.5c0-0.2,0.1-0.3,0.1-0.5
		c0.3-0.6,0.6-1.2,0.8-1.7c0.2-0.5,0.4-1,0.6-1.5c0.2-0.5,0.4-1,0.5-1.5c0.2-0.5,0.4-1,0.6-1.5c0,0,0-0.1,0.1-0.2
		c0-0.1,0.1-0.2,0.1-0.2c0-0.1,0.1-0.2,0.1-0.2s0.1-0.1,0.1-0.1c0,0,0.1,0,0.2-0.1c0.1,0,0.1,0,0.2-0.1l0.1,0.1
		c0.3,0.1,0.4,0.3,0.4,0.5c0,0.2,0,0.4-0.1,0.7c0.4-0.1,0.7-0.2,0.9-0.3c0.3-0.1,0.5-0.1,0.7-0.1c0.2,0,0.4,0,0.6,0.1
		c0.2,0.1,0.4,0.2,0.7,0.3c0.4,0.2,0.8,0.4,1.1,0.7s0.6,0.5,0.8,0.8c0.2,0.3,0.4,0.6,0.5,1c0.1,0.4,0.2,0.8,0.3,1.3c0,0,0,0,0.1,0
		c0,0,0,0,0,0c0,0,0.1,0,0.3-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.3-0.1,0.7-0.2,1.1-0.3c0.4-0.1,0.8-0.2,1.3-0.2c0.4-0.1,0.8-0.1,1.2-0.1
		c0.4,0,0.8,0.1,1.1,0.3c0.5,0.2,0.9,0.5,1.2,0.9c0.3,0.4,0.5,0.8,0.7,1.3c0.1,0.5,0.2,1,0.3,1.6c0,0.5,0,1.1-0.1,1.6
		c-0.1,0.5-0.2,1.1-0.3,1.5s-0.3,0.9-0.5,1.3c-0.1,0.1-0.2,0.4-0.4,0.8c-0.2,0.4-0.4,0.7-0.6,1.1c-0.2,0.3-0.5,0.6-0.8,0.9
		c-0.3,0.2-0.6,0.3-0.8,0.1c-0.1-0.1-0.2-0.1-0.3-0.2c0-0.1-0.1-0.2,0-0.3c0-0.1,0-0.2,0.1-0.3C166.5,59.7,166.5,59.6,166.6,59.5z"
      />
      <path
        css={generateAppearCss(3100)}
        d="M178.1,57.4c0-0.1,0.1-0.2,0.2-0.3c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5s0.2-0.3,0.2-0.3
		c0.2-0.5,0.5-0.6,0.8-0.4c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.1,0.3,0.1,0.5c-0.5,0.7-0.9,1.4-1.2,2.2c-0.3,0.7-0.6,1.5-0.9,2.2
		c-0.3,0.7-0.6,1.5-0.8,2.2c-0.3,0.7-0.7,1.5-1.1,2.2c-0.1,0.2-0.3,0.4-0.5,0.5c-0.2,0.1-0.5,0.1-0.7,0c-0.2-0.1-0.2-0.4-0.2-0.8
		s0.2-0.9,0.4-1.4s0.4-1.1,0.7-1.8c0.3-0.6,0.6-1.2,0.9-1.8c0.3-0.6,0.6-1.1,0.8-1.5C177.9,57.9,178,57.6,178.1,57.4z M180.3,51.5
		c0.1-0.2,0.2-0.2,0.3-0.2s0.3,0.1,0.4,0.2c0.1,0,0.2,0.2,0.3,0.4c0.1,0.2,0.1,0.5,0.1,0.7c0,0.2,0,0.4-0.1,0.6
		c-0.1,0.2-0.3,0.2-0.5,0.1l-0.1-0.1c-0.2-0.1-0.4-0.2-0.5-0.4c-0.1-0.1-0.2-0.2-0.2-0.3s0-0.2,0-0.4
		C180,51.9,180.1,51.7,180.3,51.5z"
      />
      <path
        css={generateAppearCss(3150)}
        d="M195.8,73.5c0.5-0.5,1-1,1.7-1.3c0.7-0.3,1.3-0.5,2.1-0.6c0.7-0.1,1.4,0,2.1,0.2c0.7,0.2,1.3,0.5,1.8,1
		c0.2,0.2,0.5,0.5,0.7,0.8c0.2,0.3,0.4,0.6,0.5,1c0.1,0.3,0.2,0.7,0.2,1s-0.2,0.7-0.4,1c0,0-0.1,0.1-0.3,0.3
		c-0.2,0.1-0.3,0.2-0.5,0.3c-0.2,0.1-0.4,0.2-0.5,0.2c-0.2,0.1-0.3,0.1-0.3,0c0.5-0.6,0.8-1.2,0.8-1.9c0-0.7-0.3-1.3-0.9-1.8
		c-0.5-0.4-1-0.7-1.5-0.8c-0.5-0.1-1.1-0.1-1.6,0c-0.5,0.1-1,0.3-1.5,0.6c-0.5,0.3-0.9,0.6-1.3,1.1c-0.5,0.6-0.8,1.1-1,1.6
		s-0.2,1.1,0,1.6c0.1,0.5,0.3,1,0.7,1.5c0.3,0.5,0.7,0.9,1.1,1.4c0.4,0.4,0.9,0.9,1.4,1.3c0.5,0.4,0.9,0.8,1.4,1.1
		c0,0,0.1,0.1,0.1,0.2c0,0.1,0.1,0.2,0.1,0.3l0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.5-0.1-0.7-0.2
		c-0.3-0.1-0.5-0.3-0.8-0.4c-0.3-0.2-0.5-0.4-0.7-0.5c-0.2-0.2-0.5-0.4-0.6-0.5s-0.3-0.3-0.4-0.3c-0.7-0.6-1.3-1.3-1.7-1.9
		c-0.4-0.7-0.7-1.3-0.8-2c-0.1-0.7,0-1.4,0.2-2.1C194.7,74.9,195.1,74.2,195.8,73.5z"
      />
      <path
        css={generateAppearCss(3200)}
        d="M209.4,93.8c0.3-0.3,0.7-0.5,1-0.8c0.4-0.3,0.7-0.6,1.1-0.9c0.4-0.3,0.7-0.6,1-0.9c0.3-0.3,0.6-0.6,0.9-0.8
		c0.4-0.4,0.7-0.7,1-1.2c0.3-0.4,0.4-0.9,0.5-1.3c0.1-0.4,0-0.9-0.1-1.3c-0.1-0.4-0.4-0.9-0.8-1.3c-0.2-0.2-0.3-0.3-0.4-0.4
		c-0.1-0.1-0.3-0.2-0.5-0.3s-0.4-0.1-0.6-0.2c-0.2-0.1-0.5-0.1-0.8-0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.1,0.1
		c-0.3,0.2-0.6,0.6-1,1.1c-0.4,0.5-0.8,0.9-1.2,1.4c-0.4,0.5-0.8,1-1.2,1.5c-0.4,0.5-0.7,0.8-1,1.1c0,0-0.1,0.1-0.1,0.1
		c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.2,0.1-0.4,0.1-0.6,0c-0.1-0.1-0.3-0.2-0.4-0.3
		c-0.2-0.1-0.2-0.3,0-0.6c0.2-0.3,0.4-0.6,0.8-1.1c0.4-0.4,0.9-1,1.5-1.5c0.6-0.6,1.2-1.3,1.9-2s1.4-1.5,2.1-2.4
		c0.7-0.9,1.4-1.8,2.1-2.8c0.2-0.4,0.5-0.7,0.7-1c0.2-0.3,0.3-0.5,0.5-0.7c0.1-0.2,0.3-0.4,0.5-0.7c0.2-0.2,0.4-0.5,0.6-0.8l0.1-0.1
		c0,0,0.1-0.1,0.2,0c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.1,0.2,0.2c-0.4,0.8-0.7,1.4-1,2s-0.5,1-0.8,1.3
		c-0.2,0.4-0.4,0.7-0.6,0.9c-0.2,0.2-0.3,0.4-0.5,0.6c-0.2,0.2-0.4,0.4-0.5,0.6c-0.2,0.2-0.4,0.5-0.7,0.8c1,0.3,1.7,0.7,2.2,1.1
		c0.5,0.5,0.8,1,1,1.6c0.2,0.6,0.2,1.2,0.1,1.8c-0.1,0.7-0.3,1.3-0.6,1.9c-0.3,0.6-0.7,1.3-1.1,1.9c-0.5,0.6-0.9,1.1-1.4,1.6
		c-0.5,0.5-1,0.9-1.4,1.3c-0.5,0.3-0.9,0.6-1.3,0.7c-0.4,0.1-0.6,0.1-0.9,0C209.4,94.6,209.4,94.3,209.4,93.8z"
      />
      <path
        css={generateAppearCss(3250)}
        d="M221.7,96c0.1,0,0.1-0.1,0.3-0.2c0.1-0.1,0.3-0.2,0.5-0.3s0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.2,0.3-0.2
		c0.4-0.4,0.7-0.4,0.9-0.1c0.1,0.1,0.2,0.3,0.2,0.4c0,0.1,0,0.3-0.1,0.5c-0.7,0.5-1.3,1-1.9,1.6c-0.6,0.6-1.1,1.2-1.6,1.8
		c-0.5,0.6-1.1,1.2-1.6,1.8c-0.5,0.6-1.1,1.1-1.8,1.7c-0.2,0.1-0.4,0.2-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3c-0.1-0.2-0.1-0.4,0.1-0.8
		c0.2-0.3,0.5-0.7,0.9-1.2c0.4-0.4,0.8-0.9,1.3-1.4c0.5-0.5,1-0.9,1.5-1.4c0.5-0.4,0.9-0.8,1.3-1.1C221.3,96.3,221.5,96.1,221.7,96z
		 M225.8,91.2c0.2-0.1,0.3-0.2,0.4-0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.1,0.2,0.1,0.5c0,0.2-0.1,0.5-0.1,0.7
		c-0.1,0.2-0.2,0.4-0.3,0.5c-0.1,0.1-0.3,0.1-0.5-0.1l-0.1-0.1c-0.2-0.2-0.3-0.4-0.3-0.5s-0.1-0.3-0.1-0.4c0-0.1,0.1-0.2,0.1-0.4
		C225.4,91.5,225.6,91.4,225.8,91.2z"
      />
      <path
        css={generateAppearCss(3300)}
        d="M223.4,105.5c0.2-0.1,0.6-0.2,0.9-0.3c0.4-0.1,0.8-0.1,1.3,0c0.5,0.1,0.9,0.2,1.4,0.5s0.9,0.6,1.4,1.1
		c0.4,0.5,0.8,1.1,1.2,1.9c0.4,0.8,0.7,1.7,0.9,2.7c0,0,0.1-0.1,0.2-0.1l0.2-0.1c0.4-0.2,0.7-0.6,0.9-1c0.2-0.4,0.4-0.9,0.5-1.4
		s0.1-1,0.1-1.5c-0.1-0.5-0.2-0.9-0.4-1.3c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.2-0.1-0.3-0.2s-0.2-0.1-0.3-0.2
		c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.2c0-0.1,0-0.1,0-0.1c0.2-0.2,0.5-0.3,0.7-0.3
		c0.2,0,0.5,0,0.7,0.1c0.2,0.1,0.4,0.2,0.6,0.4s0.4,0.4,0.5,0.6c0.3,0.6,0.5,1.2,0.5,1.9c0,0.7,0,1.4-0.2,2.1
		c-0.2,0.7-0.4,1.4-0.8,2.1c-0.4,0.7-0.8,1.3-1.2,1.9c-0.5,0.6-1,1.1-1.5,1.6c-0.6,0.5-1.2,0.9-1.8,1.2c0,0,0-0.1-0.1-0.1
		c0-0.1-0.1-0.2-0.1-0.2c0-0.1-0.1-0.2-0.1-0.2l0-0.1c0.5-0.7,0.8-1.4,1-2c0.2-0.6,0.3-1.2,0.3-1.7c0-0.5,0-0.9-0.2-1.3
		c-0.1-0.4-0.2-0.7-0.3-0.9c-0.1-0.2-0.3-0.4-0.5-0.7c-0.2-0.3-0.4-0.5-0.7-0.8c-0.3-0.3-0.6-0.5-0.9-0.7c-0.3-0.2-0.6-0.4-1-0.6
		c-0.3-0.1-0.6-0.2-1-0.2s-0.6,0.1-0.9,0.3c-0.3,0.2-0.5,0.5-0.6,0.9c-0.1,0.4,0,0.8,0,1.3s0.2,0.9,0.4,1.3c0.2,0.4,0.4,0.8,0.5,1
		c0.2,0.4,0.5,0.8,0.8,1.1c0.3,0.3,0.6,0.7,0.9,1c0.3,0.3,0.6,0.7,0.8,1c0.3,0.3,0.5,0.7,0.8,1c0,0,0,0.1,0.1,0.1
		c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.2,0.1,0.2c0,0.1,0.1,0.1,0.1,0.1c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.2,0.2s-0.2,0-0.4-0.1
		c-0.2-0.1-0.4-0.3-0.7-0.5c-0.3-0.2-0.6-0.5-0.9-0.7c-0.3-0.3-0.6-0.5-0.9-0.8c-0.3-0.3-0.5-0.5-0.7-0.8c-0.2-0.2-0.4-0.4-0.4-0.5
		c-0.4-0.6-0.7-1.2-1-1.9c-0.3-0.7-0.5-1.4-0.6-2.1c-0.1-0.7,0-1.4,0.2-2C222.2,106.5,222.7,105.9,223.4,105.5z"
      />
      <path
        css={generateAppearCss(3350)}
        d="M236.6,136.7c0,0,0.1,0,0.2-0.1s0.2-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1l0.1,0c0,0,0.2-0.1,0.4-0.1c0.2-0.1,0.5-0.2,0.7-0.2
		c0.3-0.1,0.5-0.2,0.7-0.2c0.2-0.1,0.4-0.1,0.4-0.2c0.3-0.2,0.7-0.4,1.1-0.8c0.5-0.3,0.9-0.7,1.3-1.2c0.4-0.4,0.7-0.9,0.9-1.4
		c0.2-0.5,0.2-1,0-1.4c-0.2-0.4-0.5-0.8-0.9-1.1c-0.4-0.3-0.9-0.6-1.3-0.9c-0.5-0.2-1-0.4-1.5-0.4c-0.5-0.1-1,0-1.4,0.2
		c-0.2,0.1-0.4,0.2-0.6,0.4c-0.2,0.2-0.4,0.3-0.5,0.5c-0.2,0.2-0.4,0.4-0.5,0.5c-0.2,0.2-0.4,0.3-0.6,0.4c-0.2,0.1-0.4,0.1-0.6,0.1
		c-0.2,0-0.4-0.1-0.5-0.4c-0.1-0.3-0.1-0.6,0.2-0.9c0.2-0.3,0.6-0.7,1-1c0.4-0.4,0.9-0.8,1.3-1.2c0.5-0.4,0.9-0.8,1.3-1.3
		c0.4-0.5,0.6-0.9,0.8-1.4c0.2-0.5,0.1-1-0.1-1.5c-0.2-0.4-0.4-0.7-0.7-1c-0.3-0.2-0.7-0.4-1-0.5c-0.4-0.1-0.8-0.1-1.2,0
		c-0.4,0.1-0.8,0.2-1.2,0.3c-0.6,0.3-1.2,0.6-1.7,0.9c-0.5,0.3-1.1,0.7-1.7,0.9c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0-0.3-0.1-0.5-0.3
		c-0.1-0.2-0.1-0.3-0.1-0.5c0-0.1,0.1-0.3,0.2-0.4s0.2-0.3,0.3-0.4c0.1-0.1,0.3-0.2,0.4-0.3c0.6-0.3,1.2-0.5,1.7-0.8s1-0.5,1.4-0.8
		c0.5-0.3,0.9-0.5,1.4-0.8c0.5-0.3,1-0.5,1.5-0.8c0,0,0.1,0,0.2-0.1c0.1,0,0.2-0.1,0.2-0.1c0.1,0,0.2-0.1,0.2-0.1
		c0.1,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1l0.1,0.1c0.1,0.3,0.1,0.5,0,0.7c-0.1,0.2-0.3,0.3-0.5,0.4
		c0.4,0.1,0.7,0.2,0.9,0.4c0.2,0.1,0.4,0.2,0.6,0.4c0.2,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.2,0.4,0.3,0.7c0.2,0.4,0.3,0.8,0.4,1.2
		s0.1,0.8,0,1.1c0,0.4-0.1,0.7-0.3,1.1c-0.2,0.4-0.4,0.7-0.6,1.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0.1,0.1,0.3,0.1
		c0.2,0.1,0.5,0.2,0.8,0.3c0.3,0.1,0.6,0.3,1,0.5c0.4,0.2,0.8,0.4,1.1,0.6c0.4,0.2,0.7,0.5,1,0.8c0.3,0.3,0.5,0.6,0.7,0.9
		c0.2,0.5,0.3,1,0.3,1.5c0,0.5-0.1,1-0.4,1.4c-0.2,0.5-0.5,0.9-0.8,1.3c-0.3,0.4-0.7,0.8-1.1,1.2c-0.4,0.4-0.8,0.7-1.2,1
		s-0.8,0.5-1.2,0.7c-0.1,0.1-0.4,0.2-0.8,0.3c-0.4,0.2-0.8,0.3-1.2,0.4c-0.4,0.1-0.8,0.2-1.2,0.1s-0.6-0.2-0.7-0.4
		c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.2S236.5,136.7,236.6,136.7z"
      />
      <path
        css={generateAppearCss(3400)}
        d="M243.2,142.7c0.9-0.3,1.7-0.3,2.4-0.1c0.8,0.2,1.4,0.5,2.1,1c0.6,0.5,1.2,1.1,1.6,1.8c0.4,0.7,0.8,1.4,1,2.2
		c0.1,0.4,0.2,0.8,0.1,1.2c0,0.4-0.1,0.8-0.3,1.2c-0.2,0.4-0.4,0.8-0.6,1.1s-0.5,0.7-0.9,1c-0.3,0.3-0.6,0.5-1,0.7
		c-0.3,0.2-0.7,0.4-1,0.5c-0.8,0.2-1.6,0.3-2.3,0.2c-0.7-0.1-1.4-0.4-2-0.8c-0.6-0.4-1.1-0.9-1.5-1.5c-0.4-0.6-0.8-1.3-1-2
		c-0.2-0.7-0.3-1.4-0.3-2.1c0-0.7,0.2-1.3,0.5-1.9s0.7-1.1,1.2-1.5C241.8,143.2,242.4,142.9,243.2,142.7z M243.7,143.8
		c-0.5,0.1-0.9,0.4-1.3,0.7c-0.4,0.3-0.7,0.7-0.9,1.1c-0.2,0.4-0.4,0.9-0.4,1.4c-0.1,0.5,0,1,0.1,1.5c0,0.3,0.2,0.6,0.4,0.9
		c0.2,0.3,0.5,0.7,0.9,1c0.3,0.3,0.7,0.6,1.2,0.9c0.4,0.3,0.9,0.4,1.3,0.6c0.5,0.1,0.9,0.1,1.3,0.1c0.4-0.1,0.8-0.3,1.2-0.6
		c0.4-0.3,0.6-0.8,0.9-1.4c0.2-0.6,0.4-1.5,0.4-2.5c-0.2-0.5-0.4-1-0.7-1.5c-0.3-0.5-0.7-1-1.1-1.3c-0.4-0.4-0.9-0.6-1.5-0.8
		C244.9,143.6,244.3,143.6,243.7,143.8z"
      />
      <g>
        <path
          css={generateAppearCss(3450)}
          d="M96,98.8c-0.1,0-0.4,0-0.8,0.1c-0.4,0-0.7,0.1-0.8,0.1c-1.3,0.2-2.5,0.5-3.8,1c-1.3,0.5-2.5,1-3.8,1.5
		c-1.3,0.5-2.5,1-3.8,1.5c-1.3,0.5-2.6,0.8-4,1c-1.9,0.3-3.6,0.2-5.2-0.3c-1.6-0.4-3-1.2-4.3-2.2c-1.2-1-2.3-2.3-3.1-3.8
		c-0.8-1.5-1.3-3.2-1.6-5.1c-0.3-2-0.1-3.9,0.5-5.9c0.6-2,1.5-3.9,2.7-5.7c1.2-1.8,2.6-3.6,4.3-5.2c1.7-1.6,3.4-3.1,5.3-4.4
		c1.9-1.3,3.8-2.4,5.7-3.3c1.9-0.9,3.8-1.5,5.5-2c0.9-0.2,1.8-0.3,2.6-0.1c0.9,0.1,1.6,0.4,2.3,0.7c0.6,0.4,1.2,0.9,1.7,1.5
		c0.5,0.6,0.7,1.4,0.9,2.3c-0.6,0.1-1.2,0.1-1.8,0c-0.6-0.1-1.2-0.2-1.8-0.3c-0.6-0.1-1.2-0.2-1.9-0.2c-0.6,0-1.3,0-1.9,0.1
		c-1.6,0.2-3.3,0.7-5,1.4c-1.7,0.7-3.4,1.7-5,2.8c-1.6,1.1-3.1,2.4-4.4,3.9c-1.4,1.4-2.5,3-3.5,4.6c-1,1.6-1.7,3.4-2.1,5.2
		c-0.5,1.8-0.6,3.6-0.3,5.4c0.2,1.3,0.6,2.3,1.4,3.2c0.8,0.9,1.7,1.6,2.7,2.1c1,0.5,2.1,0.9,3.3,1c1.2,0.2,2.3,0.2,3.4,0
		c2-0.3,4-0.6,6.1-1c2.1-0.4,3.9-1,5.5-1.8c1.6-0.8,2.9-1.9,3.8-3.2c0.9-1.4,1.2-3.1,0.9-5.3c0-0.3-0.1-0.7-0.3-1.3
		c-0.1-0.6-0.4-1-0.8-1.3l-12.3,1.7c-0.4,0.1-0.7,0-1-0.1c-0.3-0.1-0.6-0.3-0.9-0.6c-0.3-0.3-0.6-0.5-0.7-0.9
		c-0.2-0.3-0.3-0.6-0.3-0.9c-0.1-0.4-0.1-0.7,0-1.1c0-0.4,0.3-0.6,0.7-0.7c0.4-0.1,0.9,0,1.4,0c0.5,0.1,0.9,0.2,1.4,0.3
		c0.5,0.1,0.9,0.2,1.4,0.3c0.5,0.1,1,0.1,1.4,0c1.6-0.2,3.1-0.6,4.6-1.1c1.5-0.5,3-0.8,4.6-1.1c0.4-0.1,0.8,0,1.2,0.1
		s0.8,0.3,1.2,0.6c0.4,0.2,0.7,0.6,1,0.9c0.3,0.4,0.4,0.7,0.5,1.1l2.4,16.8c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.5,0.3,0.8,0.5
		c0.3,0.2,0.5,0.3,0.8,0.5c0.3,0.2,0.4,0.3,0.5,0.4c0.1,0.3,0.1,0.6,0,0.9c-0.1,0.3-0.3,0.6-0.5,0.9c-0.2,0.3-0.5,0.5-0.8,0.7
		c-0.3,0.2-0.6,0.3-0.9,0.4c-0.9,0.1-1.7-0.1-2.3-0.6c-0.6-0.5-1.1-1.1-1.5-1.9s-0.7-1.6-0.8-2.5C96.3,100.2,96.1,99.5,96,98.8z"
        />
        <path
          css={generateAppearCss(3500)}
          d="M118,92.2c0.3-0.7,0.8-1.4,1.6-2.2c0.7-0.8,1.7-1.5,2.8-2c1.1-0.6,2.5-1,4-1.2c1.5-0.2,3.1-0.2,4.9,0.2s3.7,1.1,5.7,2.1
		s4.2,2.6,6.4,4.6c0,0,0.1-0.3,0.2-0.6l0.2-0.6c0.4-1.1,0.5-2.3,0.3-3.7c-0.2-1.4-0.6-2.7-1.3-4c-0.6-1.3-1.4-2.4-2.3-3.4
		c-0.9-1-1.9-1.7-3-2.1c-0.4-0.2-0.8-0.2-1.2-0.2c-0.4,0-0.7,0-1.1,0.1c-0.4,0.1-0.7,0.1-1,0.2c-0.3,0-0.7,0-1.1-0.2
		c-0.1,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.1-0.3-0.2-0.5c-0.1-0.2-0.1-0.3-0.1-0.3c0.3-0.8,0.7-1.4,1.2-1.8
		c0.5-0.4,1-0.7,1.6-0.9c0.6-0.2,1.3-0.2,2-0.2c0.7,0,1.4,0.2,2,0.5c1.6,0.8,3,2,4.3,3.4c1.2,1.5,2.2,3.1,3,4.9
		c0.8,1.8,1.3,3.7,1.7,5.8c0.3,2.1,0.4,4.2,0.4,6.3s-0.3,4.1-0.8,6c-0.5,2-1.2,3.9-2,5.5c0,0-0.2-0.1-0.4-0.2
		c-0.2-0.1-0.4-0.2-0.7-0.3s-0.4-0.2-0.6-0.3l-0.3-0.2c-0.1-2.3-0.5-4.3-1.1-6c-0.6-1.6-1.3-3-2.2-4.1c-0.8-1.1-1.6-2-2.5-2.6
		c-0.8-0.6-1.5-1.1-2-1.5c-0.6-0.2-1.4-0.5-2.3-0.7c-0.9-0.2-1.9-0.4-2.9-0.6c-1-0.1-2.1-0.2-3.1-0.2c-1.1,0-2.1,0.1-3,0.3
		c-0.9,0.2-1.8,0.6-2.5,1.1c-0.7,0.5-1.2,1.3-1.6,2.2c-0.4,1-0.3,2,0.2,3c0.5,1,1.3,1.9,2.3,2.8c1,0.9,2,1.6,3.1,2.3
		c1.1,0.6,2,1.1,2.8,1.3c1.2,0.5,2.4,0.8,3.6,1.1c1.2,0.3,2.4,0.6,3.6,0.9c1.2,0.3,2.3,0.5,3.5,0.8s2.3,0.7,3.4,1.1
		c0.1,0,0.2,0.1,0.4,0.2c0.2,0.1,0.4,0.2,0.7,0.3c0.2,0.1,0.4,0.2,0.6,0.3c0.2,0.1,0.3,0.1,0.4,0.2c0.3,0.3,0.4,0.5,0.4,0.8
		c-0.1,0.3-0.1,0.5-0.2,0.8c-0.1,0.3-0.5,0.4-1.1,0.5c-0.6,0.1-1.4,0.1-2.4,0.1c-1,0-2-0.1-3.2-0.2c-1.2-0.1-2.2-0.2-3.3-0.3
		s-2-0.3-2.9-0.5c-0.9-0.2-1.5-0.3-1.8-0.4c-1.8-0.7-3.6-1.5-5.5-2.6s-3.5-2.3-4.8-3.7c-1.3-1.4-2.3-3-2.8-4.8
		C117,96.4,117.2,94.4,118,92.2z"
        />
        <path
          css={generateAppearCss(3550)}
          d="M171.8,107.5c0.1-0.1,0.3-0.4,0.7-0.8c0.3-0.4,0.7-0.7,1.1-1.1c0.4-0.4,0.7-0.8,1.1-1.1c0.3-0.4,0.6-0.6,0.7-0.8
		c0.8-1.2,1.6-1.4,2.3-0.7c0.3,0.3,0.5,0.6,0.6,1c0.1,0.4,0.1,0.8,0,1.3c-1.7,1.7-3.1,3.4-4.3,5.3c-1.2,1.9-2.4,3.7-3.5,5.6
		c-1.1,1.9-2.3,3.8-3.4,5.6s-2.5,3.7-4.1,5.4c-0.4,0.5-1,0.8-1.7,1c-0.7,0.2-1.3,0.1-1.9-0.5c-0.4-0.4-0.5-1.1-0.1-2.2
		s1-2.2,1.8-3.6c0.8-1.4,1.8-2.8,2.9-4.4c1.1-1.6,2.2-3,3.3-4.4c1.1-1.4,2.1-2.6,3-3.6C170.9,108.6,171.5,107.9,171.8,107.5z
		 M180.7,92.6c0.4-0.4,0.7-0.6,1.1-0.5c0.3,0.1,0.7,0.3,1.1,0.6c0.3,0.2,0.4,0.6,0.5,1.3c0.1,0.7,0.1,1.3,0,1.9
		c-0.1,0.6-0.3,1.1-0.6,1.5c-0.3,0.4-0.8,0.4-1.4,0l-0.3-0.2c-0.5-0.5-0.9-0.9-1.2-1.2c-0.3-0.4-0.4-0.7-0.5-1c0-0.3,0-0.7,0.2-1
		C179.9,93.6,180.2,93.1,180.7,92.6z"
        />
        <path
          css={generateAppearCss(3600)}
          d="M180.5,132.9c0.7-0.3,1.6-0.5,2.7-0.6c1.1-0.1,2.2,0,3.5,0.4c1.2,0.3,2.5,0.9,3.7,1.8c1.3,0.8,2.4,2,3.5,3.4
		c1.1,1.5,2,3.3,2.8,5.4c0.8,2.2,1.3,4.7,1.6,7.7c0,0,0.2-0.1,0.6-0.3l0.5-0.3c1.1-0.5,2-1.4,2.8-2.5s1.4-2.4,1.8-3.8
		c0.4-1.4,0.6-2.8,0.6-4.1s-0.3-2.6-0.8-3.6c-0.2-0.4-0.4-0.7-0.7-1c-0.3-0.2-0.6-0.5-0.9-0.7c-0.3-0.2-0.6-0.4-0.9-0.6
		c-0.3-0.2-0.5-0.5-0.7-0.8c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.3,0.1-0.5c0.1-0.2,0.1-0.3,0.1-0.3
		c0.7-0.4,1.4-0.5,2.1-0.5c0.7,0,1.3,0.2,1.8,0.5c0.6,0.3,1.1,0.7,1.5,1.2c0.5,0.5,0.9,1.1,1.2,1.7c0.6,1.7,0.9,3.5,0.8,5.4
		c-0.1,1.9-0.5,3.8-1.1,5.6c-0.6,1.9-1.5,3.7-2.7,5.4c-1.2,1.7-2.5,3.4-3.9,4.9c-1.4,1.5-3,2.8-4.7,3.9c-1.7,1.2-3.5,2.1-5.2,2.7
		c0,0-0.1-0.2-0.2-0.4c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.3-0.2-0.5-0.2-0.7l-0.1-0.3c1.5-1.8,2.5-3.5,3.2-5.2c0.6-1.6,1-3.1,1.2-4.5
		c0.2-1.4,0.1-2.6,0-3.6c-0.2-1-0.4-1.8-0.5-2.5c-0.3-0.6-0.7-1.3-1.2-2.1c-0.5-0.8-1.1-1.6-1.7-2.4s-1.4-1.6-2.2-2.3
		c-0.8-0.7-1.6-1.3-2.5-1.8c-0.8-0.5-1.7-0.7-2.6-0.8c-0.9-0.1-1.8,0.1-2.7,0.5c-1,0.5-1.6,1.3-1.9,2.4c-0.3,1.1-0.4,2.3-0.2,3.6
		s0.4,2.6,0.8,3.8c0.4,1.2,0.8,2.2,1.1,2.9c0.6,1.1,1.2,2.2,1.9,3.2c0.7,1,1.4,2,2,3c0.7,1,1.4,2,2,3c0.6,1,1.2,2,1.8,3.1
		c0,0.1,0.1,0.2,0.2,0.4c0.1,0.2,0.2,0.4,0.3,0.7c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.2,0.2,0.3,0.2,0.4c0,0.4,0,0.7-0.3,0.8
		c-0.2,0.2-0.5,0.3-0.7,0.4c-0.2,0.1-0.6,0-1.2-0.4c-0.5-0.4-1.1-0.9-1.8-1.5c-0.7-0.7-1.4-1.4-2.2-2.3c-0.8-0.8-1.5-1.7-2.2-2.5
		c-0.7-0.8-1.3-1.6-1.8-2.3c-0.5-0.7-0.9-1.2-1-1.6c-0.9-1.7-1.6-3.6-2.3-5.6c-0.7-2-1-4-1.1-6c0-2,0.3-3.8,1.2-5.5
		C177,135.4,178.4,134,180.5,132.9z"
        />
        <path
          css={generateAppearCss(3650)}
          d="M189.6,179.4c1.3-0.1,2.4,0.3,3.1,1.2c0.7,1,1.2,2.2,1.3,3.5c0,0.4,0,0.9-0.3,1.3c-0.2,0.4-0.5,0.7-0.9,1
		c-0.4,0.3-0.7,0.5-1.2,0.7c-0.4,0.2-0.8,0.3-1.2,0.3c-0.5,0.1-1-0.1-1.4-0.4c-0.4-0.3-0.8-0.7-1.2-1.2c-0.4-0.5-0.7-1-0.9-1.5
		c-0.2-0.6-0.3-1.1-0.4-1.5c-0.1-1.1,0.1-2,0.7-2.5C187.7,179.8,188.5,179.5,189.6,179.4z M205,179.9c1.2-0.3,2.7-0.6,4.7-0.9
		c2-0.3,4.2-0.6,6.6-0.8c2.4-0.3,4.9-0.5,7.6-0.8c2.6-0.3,5.2-0.5,7.6-0.8c2.4-0.3,4.6-0.5,6.6-0.7c2.1-0.2,3.7-0.4,4.8-0.6l0.9,3.2
		l-1.2,0.2c-0.8,0.1-1.9,0.2-3.2,0.4c-1.3,0.2-2.8,0.3-4.5,0.5c-1.7,0.2-3.5,0.4-5.3,0.7c-1.8,0.2-3.7,0.5-5.6,0.6
		c-1.9,0.2-3.6,0.4-5.2,0.6c-1.6,0.2-3,0.4-4.3,0.5c-1.2,0.2-2.1,0.3-2.7,0.4c-0.1,0-0.3,0-0.5,0.1c-0.2,0-0.5,0.1-0.9,0.1
		c-0.3,0.1-0.7,0.1-1,0.1c-0.3,0-0.6,0.1-0.7,0.1c-0.4,0-0.8,0.1-1.2,0.2c-0.5,0.1-0.9,0.1-1.4,0.1c-0.5,0-0.8-0.1-1.2-0.3
		c-0.3-0.2-0.5-0.6-0.6-1.1c0-0.3,0-0.7,0-1C204.3,180.4,204.5,180.1,205,179.9z"
        />
      </g>
    </g>
  </svg>
)
