import Head from 'next/head'
import { Cockade } from '../svg/cockade'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello World... Almost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Cockade />
      </main>

    </div>
  )
}
