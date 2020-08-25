import 'modern-css-reset/dist/reset.min.css'
import styled from '@emotion/styled'
import {colors} from '../constants/colors'

const Container = styled.div`
    background-color: ${colors.main.high};
    color: black;
    font-family: sans-serif;
    min-height: 100vh;
    padding-top: 20vh;
    text-align: center;
    width: 100vw;
`

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Container><Component {...pageProps} /></Container>
}
