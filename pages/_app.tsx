import 'modern-css-reset/dist/reset.min.css'
import { css, Global } from '@emotion/core'
import { NextSeo } from 'next-seo'
import App from 'next/app'
import { appWithTranslation } from '../i18n'
import { Container } from '../components/Container'
import { Heart } from '../components/Heart'
import { bornValues } from '../constants/bornValues'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <NextSeo
        title={`Hello World${bornValues.born ? '' : '... almost'}!`}
        description="I miei genitori hanno messo su \'sta roba. Dategli un occhio, fateli felici"
        canonical="https://piccologuaioaportaromana.com/"
        openGraph={{
          url: 'https://piccologuaioaportaromana.com/',
          title: `Hello World${bornValues.born ? '' : '... almost'}!`,
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
            font-family: 'Indie Flower', cursive;
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
