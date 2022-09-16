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
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default MyApp;
