import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sneakers E-commerce</title>
        <meta name="description" content="Sneakers E-commerce Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Slider />
      </main>
    </div>
  )
}
