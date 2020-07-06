/// <reference path="styled.d.ts" />

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto");

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    background: ${props => props.theme.colors.gray};
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.colors.black}
  }
  button {
    font-family: 'Montserrat', 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;