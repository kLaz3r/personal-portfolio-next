import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', sans-serif;
}
body {
  background: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.light};
  font-family: 'Roboto Mono', sans-serif;
  overflow: auto;
  overflow-x: hidden;
}
.example::-webkit-scrollbar {
  display: none;
}

.example {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
`;

export default GlobalStyles;
