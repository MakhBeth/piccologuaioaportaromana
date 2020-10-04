import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

import { colors } from '../constants/colors'

const beat = keyframes`
0%, 20%, 40%, 60%, 80% {
  transform: scale(1) rotate(-45deg);
  opacity: 1;
}
10%, 30%, 50%, 70% {
  transform: scale(0.6) rotate(-45deg);
  opacity: 1;
}
100% {
  opacity: 0;
  transform: scale(0) rotate(-45deg);
}
`

export const Heart = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colors.main.lowest};
  height: 50px;
  width: 50px;
  transform: rotate(-45deg);
  animation-name: ${beat};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: scale(0);
  will-change: transform, opacity;
  &:after {
    background-color: ${colors.main.lowest};
    content: '';
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  &:before {
    background-color: ${colors.main.lowest};
    content: '';
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
`
