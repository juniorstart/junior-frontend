import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
      <Input></Input>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;