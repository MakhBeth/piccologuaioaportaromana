/** @jsx jsx m */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import { GitHub } from 'react-feather'

import { Content } from '../components/Content'
import { Countdown } from '../components/Countdown'
import { BirthDate } from '../components/BirthDate'

import { withTranslation } from '../i18n'
import { colors } from '../constants/colors'
import { bornValues } from '../constants/bornValues'

import { Cockade } from '../svg/cockade'
import { Weigth } from '../svg/weigth'
import { Length } from '../svg/length'

const Home = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
      `}
    >
      <Head>
        <title>Hello World... Almost</title>
        <meta name="apple-mobile-web-app-title" content="Gaia" />
        <meta name="application-name" content="Gaia" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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

      <main
        css={css`
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-evenly;
        `}
      >
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
          {bornValues.date ? (
            <BirthDate time={new Date('2021-02-15')} />
          ) : (
            <Countdown time={new Date('2021-02-15')} />
          )}
        </div>
        <Content born={!!bornValues.date} />
      </main>
      <div
        css={css`
          text-align: right;
        `}
      >
        <a
          href="https://github.com/MakhBeth/piccologuaioaportaromana"
          target="_blank"
          rel="noopener"
          css={css`
            clip-path: polygon(100% 0, 0% 100%, 100% 100%);
            display: inline-block;
            background-color: ${colors.neutral.highest};
            position: relative;
            padding: 3rem 0.5rem 0.5rem 3rem;
            color: ${colors.main.lowest};
            margin-right: -2px;
            will-change: background-color;
            transition: background-color 300ms;

            &:hover {
              background-color: ${colors.main.neutral};
            }
          `}
        >
          <GitHub />
        </a>
      </div>
      {/* <Weigth />
      <Length /> */}
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Home)
