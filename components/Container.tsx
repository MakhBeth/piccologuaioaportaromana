import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { colors } from '../constants/colors'

const background = keyframes`
0%, 90%{
  opacity: 0;
}
100% {
  opacity: 0.4;
}
`

export const Container = styled.div`
  background-color: ${colors.main.neutral};
  color: black;
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;
  padding-top: 3vw;
  position: relative;
  text-align: center;
  width: 95vw;
  z-index: 0;

  &::before {
    animation: ${background} 4s ease-out;
    background-image: radial-gradient(#fff 0.5vw, transparent 0.5vw),
      radial-gradient(#fff 0.5vw, transparent 0.5vw);
    background-position: 0 0, 2vw 2vw;
    background-size: 4vw 4vw;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
    will-change: opacity;
    z-index: -1;
  }
`
