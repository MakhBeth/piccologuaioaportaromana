import 'modern-css-reset/dist/reset.min.css'
import styled from '@emotion/styled'
import { colors } from '../constants/colors'
import { css, keyframes, Global } from '@emotion/core'
import OneSignal from 'react-onesignal'
import { useEffect } from 'react'

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
    overflow: visible;
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

const background = keyframes`
  0%, 90%{
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }
`

const Container = styled.div`
  animation: ${intro} 2s ease-out;
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

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      OneSignal.initialize('2b904660-5c50-4fa8-a921-d8664b931c4f', {
        notifyButton: {
          enable: true,
        },
        subdomainName: 'piccologuaioap',
        safari_web_id:
          'web.onesignal.auto.28be2e0f-48c0-43fd-877a-95cc3c6fc0d9',
      })
    }
  }, [])
  return (
    <Container>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
          body {
            font-family: 'Indie Flower', cursive;
          }
        `}
      />
      <Component {...pageProps} />
    </Container>
  )
}
