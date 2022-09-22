import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='description'
          content='The Personal Portfolio of a front end web developer'
          key='desc'
        />
        <meta property='og:title' content='Stefan Nasturas Web Developer' />
        <meta
          property='og:description'
          content='The Personal Portfolio of a front end web developer'
        />
        <meta property='og:image' content='/images/og-image.png' />
        <meta name='theme-color' content='#3b5161' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
