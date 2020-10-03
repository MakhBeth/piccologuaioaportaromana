/** @jsx jsx m */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import { Content } from '../components/Content'
import { Countdown } from '../components/Countdown'
import { withTranslation } from '../i18n'
import { Cockade } from '../svg/cockade'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Hello World... Almost</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
      </Head>

      <form
        name="notifications"
        data-netlify
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="email" name="email" />
      </form>
      <main>
        <div
          css={css`
            margin-bottom: 4vh;
            z-index: -1;
            position: relative;
          `}
        >
          <Cockade />
        </div>
        <div
          css={css`
            position: relative;
            z-index: 1;
          `}
        >
          <Countdown time={new Date('2021-02-15')} />
        </div>
        <Content />
      </main>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Home)
