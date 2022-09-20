import Aos from 'aos';
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
      <Head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='description of your project' />
        <meta name='theme-color' content='#000' />
        <title>Title of the project</title>
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
      </Head>
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
