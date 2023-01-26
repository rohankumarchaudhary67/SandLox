import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SandLox | Collection of Shoes | Buy Now</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="./bgs/header-bg.jpg" width={"100%"} alt="" />
      </div>

      <Footer />
    </> 
  )
}
