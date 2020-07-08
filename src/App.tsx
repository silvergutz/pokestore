import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import GlobalStyle from './GlobalStyle';
import Page from './components/Page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
