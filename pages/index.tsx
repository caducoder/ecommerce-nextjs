import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Slider } from '../components/Slider'
import { Details } from '../components/Details'

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
        <div className='md:container mx-auto md:flex md:flex-row md:items-center lg:px-24 md:mt-16 md:gap-8 lg:gap-16'>
          <Slider />
          <Details />
        </div>
      </main>
    </div>
  )
}
