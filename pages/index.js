import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sneakers E-commerce</title>
        <meta name="description" content="Sneakers E-commerce Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-5xl font-bold text-center py-4">Sneakers</h1>
      </main>
    </div>
  )
}
