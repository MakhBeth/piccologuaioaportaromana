/** @jsx jsx */ import { FunctionComponent } from 'react'
import { css, jsx, keyframes } from '@emotion/core'
import { colors } from '../constants/colors'
import { Spawn } from './spawn'
import { Write } from './write'

const bounce = keyframes`
    0%, 50% {
        transform: scale(0);
    }

    80% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
`

const rotation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const bounce2 = keyframes`
    0%, 50% {
        transform: scale(0);
        margin: -3vw;
    }

    80% {
        transform: scale(1.2);
        margin: 5vw;
    }

    100% {
        transform: scale(1);
        margin: 0;
    }
`

const opacity = keyframes`
    0%, 50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const shadowCss = css`
  animation: ${bounce2} 3s;
  fill: ${colors.shadow};
  will-change: transform;
`

const Coccarda: FunctionComponent<{
  color?: string
  shadow?: boolean
}> = ({ shadow }) => (
  <div
    css={css`
      animation: ${shadow ? bounce2 : bounce} 3s;
      position: absolute;
      left: ${shadow ? 3 : 0}vw;
      top: ${shadow ? 3 : 0}vw;
      width: 100%;
      will-change: transform;
    `}
  >
    <svg
      aria-labelledby="cockadesvg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 453 453"
      css={
        shadow
          ? shadowCss
          : css`
              fill: #fff;
            `
      }
    >
      <title id="cockadesvg">Coccarda di festeggiamento</title>
      <path
        d="M452.2,225.8c0-8.3-2.9-16-7.6-22c-3-3.9-3.7-9-1.8-13.6c2.9-7,3.6-15,1.5-22.8c-2.2-8-6.9-14.7-13.1-19.3
            c-3.9-2.9-5.9-7.8-5.3-12.6c1-7.5-0.4-15.4-4.5-22.4c-4.2-7.2-10.4-12.4-17.6-15.3c-4.6-1.8-7.7-6-8.4-10.8
            c-1-7.5-4.4-14.8-10.1-20.5c-5.9-5.9-13.3-9.3-21-10.2c-4.9-0.6-9-3.8-10.9-8.3c-2.9-7-8-13.1-15.1-17.2
            c-7.2-4.2-15.2-5.5-22.9-4.4c-4.9,0.7-9.7-1.3-12.7-5.2c-4.6-6-11.2-10.6-19-12.7c-8-2.2-16.2-1.4-23.2,1.7
            c-4.5,1.9-9.7,1.3-13.6-1.7c-6-4.6-13.5-7.4-21.7-7.4c-8.3,0-16,2.9-22,7.6c-3.9,3-9,3.7-13.6,1.8c-7-2.9-15-3.6-22.8-1.5
            c-8,2.2-14.7,6.9-19.3,13.1c-2.9,3.9-7.8,5.9-12.6,5.3c-7.5-1-15.4,0.4-22.4,4.5c-7.2,4.2-12.4,10.4-15.3,17.6
            c-1.8,4.6-6,7.7-10.8,8.4c-7.5,1-14.8,4.4-20.5,10.1c-5.9,5.9-9.3,13.3-10.2,21c-0.6,4.9-3.8,9-8.3,10.9c-7,2.9-13.1,8-17.2,15.1
            c-4.2,7.2-5.5,15.2-4.4,22.9c0.7,4.9-1.3,9.7-5.2,12.7c-6,4.6-10.6,11.2-12.7,19c-2.2,8-1.4,16.2,1.7,23.2
            c1.9,4.5,1.3,9.7-1.7,13.6c-4.6,6-7.4,13.5-7.4,21.7c0,8.3,2.9,16,7.6,22c3,3.9,3.7,9,1.8,13.6c-2.9,7-3.6,15-1.5,22.8
            c2.2,8,6.9,14.7,13.1,19.3c3.9,2.9,5.9,7.8,5.3,12.6c-1,7.5,0.4,15.4,4.5,22.4c4.2,7.2,10.4,12.4,17.6,15.3c4.6,1.8,7.7,6,8.4,10.8
            c1,7.5,4.4,14.8,10.1,20.5c5.9,5.9,13.3,9.3,21,10.2c4.9,0.6,9,3.8,10.9,8.3c2.9,7,8,13.1,15.1,17.2c7.2,4.2,15.2,5.5,22.9,4.4
            c4.9-0.7,9.7,1.3,12.7,5.2c4.6,6,11.2,10.6,19,12.7c8,2.2,16.2,1.4,23.2-1.7c4.5-1.9,9.7-1.3,13.6,1.7c6,4.6,13.5,7.4,21.7,7.4
            c8.3,0,16-2.9,22-7.6c3.9-3,9-3.7,13.6-1.8c7,2.9,15,3.6,22.8,1.5c8-2.2,14.7-6.9,19.3-13.1c2.9-3.9,7.8-5.9,12.6-5.3
            c7.5,1,15.4-0.4,22.4-4.5c7.2-4.2,12.4-10.4,15.3-17.6c1.8-4.6,6-7.7,10.8-8.4c7.5-1,14.8-4.4,20.5-10.1c5.9-5.9,9.3-13.3,10.2-21
            c0.6-4.9,3.8-9,8.3-10.9c7-2.9,13.1-8,17.2-15.1c4.2-7.2,5.5-15.2,4.4-22.9c-0.7-4.9,1.3-9.7,5.2-12.7c6-4.6,10.6-11.2,12.7-19
            c2.2-8,1.4-16.2-1.7-23.2c-1.9-4.5-1.3-9.7,1.7-13.6C449.5,241.5,452.2,233.9,452.2,225.8z"
      />
    </svg>
  </div>
)

Coccarda.defaultProps = {
  shadow: false,
}

export const Cockade: React.FunctionComponent = () => (
  <div
    css={css`
      animation: ${opacity} 2s;
      height: 90vw;
      margin: 0 auto;
      max-height: 60vh;
      max-width: 60vh;
      position: relative;
      width: 90vw;
      will-change: transform;
    `}
  >
    <Coccarda shadow />
    <Coccarda />
    <Spawn
      addcss={css`
        animation: ${opacity} 3s;
        bottom: 0%;
        font-size: 3rem;
        left: 51%;
        position: absolute;
        top: 62%;
        transform: translate(-50%, -50%);
        width: 75%;
        will-change: opacity;
      `}
    />
    <Write
      addcss={css`
        left: 20%;
        position: absolute;
        top: 12%;
        width: 70%;
        z-index: 0;
      `}
    />
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      css={css`
        animation: ${rotation} 100s infinite linear;
        height: 85%;
        left: 0;
        left: 7.5%;
        position: absolute;
        position: absolute;
        top: 0;
        top: 7.5%;
        width: 85%;
        will-change: transform;
        z-index: 1;
      `}
    >
      <circle
        cx="50%"
        cy="50%"
        r="500px"
        css={css`
          stroke-width: 2;
          stroke-dasharray: 30, 40;
          fill: none;
          stroke: ${colors.main.neutral};
        `}
      />
    </svg>
  </div>
)
