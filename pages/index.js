/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Stefan Nasturas Web Dev</title>
        <meta name='description' content='Home page of my personal portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <About />
    </Layout>
  );
}
