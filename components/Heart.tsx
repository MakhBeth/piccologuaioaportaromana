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
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-name: ${beat};
  background-color: ${colors.main.lowest};
  bottom: 0;
  height: 50px;
  left: 0;
  margin: auto;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(-45deg);
  transform: scale(0);
  width: 50px;
  will-change: transform, opacity;

  &:after {
    background-color: ${colors.main.lowest};
    border-radius: 50%;
    content: '';
    height: 50px;
    left: 25px;
    position: absolute;
    top: 0px;
    width: 50px;
  }
  &:before {
    background-color: ${colors.main.lowest};
    border-radius: 50%;
    content: '';
    height: 50px;
    left: 0px;
    position: absolute;
    top: -25px;
    width: 50px;
  }
`
