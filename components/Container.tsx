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
  overflow: hidden;
  position: relative;
  padding-top: 3vw;
  min-height: 100vh;
  text-align: center;
  width: 95vw;
  z-index: 0;

  &::before {
    animation: ${background} 4s ease-out;
    will-change: opacity;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: radial-gradient(#fff 0.5vw, transparent 0.5vw),
      radial-gradient(#fff 0.5vw, transparent 0.5vw);
    background-position: 0 0, 2vw 2vw;
    background-size: 4vw 4vw;
    opacity: 0.5;
  }
`
