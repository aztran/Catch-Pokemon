import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
     body {
        background: #fff;
        color: #4b4c4c;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.4;
        font-family: gothamLight;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        overflow: hidden;
        margin: 0;
        padding: 0;

    }
    a {
        color: white;
        text-decoration: none;
    }

    .grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-gap: 1rem;
    }

   

    @media (min-width: 600px) {
        .grid { grid-template-columns: repeat(2, 1fr); }
    }

    /* Screen larger than 900px? 3 columns */
    @media (min-width: 900px) {
    .grid { grid-template-columns: repeat(4, 1fr); }
    }
}

`;

const theme = {
  colors: {
    whiteDop: '#f0f0f0',
    lightGrey: '#a6a6a6',
    lightGrey2: '#9b9b9b',
    darkGrey: '#646464',
    cyan: '#009ddc',
    darkBlue: '#0066b3',
    cornflowerblue: 'cornflowerblue'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
