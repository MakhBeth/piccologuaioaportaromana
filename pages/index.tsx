import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello World... Almost</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <h1 className="title">
          Hello World... Almost!
        </h1>
      </main>

    </div>
  )
}
