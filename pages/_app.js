import Aos from 'aos';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
// const Aos = dynamic(() => import('aos'), {
//   ssr: true,
// });

const theme = {
  dark: '#303841',
  primary: '#3b5161',
  secondary: '#f6c90e',
  light: '#d8efff',
  lighter: '#ffffff',
};

function MyApp({ Component, pageProps }) {
  typeof window !== 'undefined' && Aos.init();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Script
          src='https://kit.fontawesome.com/865bc47756.js'
          crossorigin='anonymous'
        ></Script>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
