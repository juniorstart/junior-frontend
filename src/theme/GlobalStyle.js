import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap&subset=latin-ext');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; 
        /* 1rem = 10px */
    }

    body {
        font-size: 1.6rem;
        font-family: 'Lato', sans-serif;
    }
`;

export default GlobalStyle;