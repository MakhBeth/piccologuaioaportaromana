/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import { Countdown } from '../components/Countdown'
import { Cockade } from '../svg/cockade'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello World... Almost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      </main>
    </div>
  )
}
