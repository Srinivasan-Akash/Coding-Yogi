import Head from 'next/head'
import styles from '@/styles/pages/Hero.module.css';

import Navbar from '@/components/Navbar'
import Hero from '@/components/Page Sections/Hero'
import Features from '@/components/Page Sections/Features';
import Trending from '@/components/Page Sections/Trending';
import FAQ from '@/components/Page Sections/FAQ';
import Testimonials from '@/components/Page Sections/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coding Yoga</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles["main"]}>
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>
        <Trending></Trending>
        <FAQ></FAQ>
        <Testimonials></Testimonials>
      </main>
    </>
  )
}
