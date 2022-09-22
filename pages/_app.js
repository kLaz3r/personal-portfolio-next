import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  dark: '#303841',
  primary: '#3b5161',
  secondary: '#f6c90e',
  light: '#d8efff',
  lighter: '#ffffff',
};

function MyApp({ Component, pageProps }) {
  typeof window !== 'undefined' && AOS.init();
  return (
    <>
      <Head>
        <title>Home | Stefan Nasturas Web Dev</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Script
          src='https://kit.fontawesome.com/865bc47756.js'
          crossorigin='anonymous'
        ></Script>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
