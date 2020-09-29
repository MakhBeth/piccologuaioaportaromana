import 'modern-css-reset/dist/reset.min.css'
import styled from '@emotion/styled'
import { colors } from '../constants/colors'
import { css, keyframes, Global } from '@emotion/core'
import { NextSeo } from 'next-seo'
import App from 'next/app'
import { appWithTranslation } from '../i18n'

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

const Heart = styled.div`
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

const background = keyframes`
  0%, 90%{
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }
`

const Container = styled.div`
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

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <NextSeo
        title="Hello World... almost!"
        description="I miei genitori hanno messo su \'sta roba. Dategli un occhio, fateli felici"
        canonical="https://piccologuaioaportaromana.com/"
        openGraph={{
          url: 'https://piccologuaioaportaromana.com/',
          title: 'Hello World... almost!',
          description:
            "I miei genitori hanno messo su 'sta roba. Dategli un occhio, fateli felici",
          images: [{ url: 'https://piccologuaioaportaromana.com/preview.jpg' }],
          site_name: 'PiccoloGuaioAPortaRomana',
        }}
        twitter={{
          handle: '@makhbeth',
        }}
      />
      <Global
        styles={css`
          body {
            z-index: 1;
          }
        `}
      />
      <Heart />
      <Component {...pageProps} />
    </Container>
  )
}

MyApp.getInitialProps = async appContext => ({
  ...(await App.getInitialProps(appContext)),
})

export default appWithTranslation(MyApp)
