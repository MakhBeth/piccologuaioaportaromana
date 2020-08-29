import 'modern-css-reset/dist/reset.min.css'
import styled from '@emotion/styled'
import {colors} from '../constants/colors'
import {keyframes} from '@emotion/core'

const intro = keyframes`
  from, 50% {
    min-height: 0vh;
    height: 0vh;
    overflow: hidden;
    opacity: 0;
  }

  to {
    min-height: 100vh;
    height: 100vh;
  }

  70% {
    min-height: 100vh;
    height: 100vh;
    opacity: 1;
  }

  75%,78% {
    min-height: 80vh;
    height: 80vh;
  }

  80% {
    min-height: 100vh;
    height: 100vh;
  }

  85%,86% {
    min-height: 90vh;
    height: 90vh;
  }

  90% {
    min-height: 100vh;
    height: 100vh;
  }

  95%,96% {
    min-height: 95vh;
    height: 95vh;
  }
`

const Container = styled.div`
  animation: ${intro} 2s ease-out;
  height: 0vh;
  background-color: ${colors.main.low};
  color: black;
  position: relative;
  font-family: sans-serif;
  min-height: 100vh;
  text-align: center;
  width: 100vw;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(90deg, #161122 21px, transparent 1%) center, linear-gradient(#161122 21px, transparent 1%) center, transparent;
    background-size: 26px 26px;
  }
`

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Container><Component {...pageProps} /></Container>
}
