import { getAnalytics, logEvent } from 'firebase/analytics';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { app } from '../lib/firebase';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  dark: '#303841',
  primary: '#3b5161',
  secondary: '#f6c90e',
  light: '#d8efff',
  lighter: '#ffffff',
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const analytics = getAnalytics(app);
      logEvent(analytics, 'user', {});
      console.log(analytics);
    }
  }, []);
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
