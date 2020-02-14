import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
      box-sizing: border-box;
    }
     body {
        background: #fff;
        color: #4b4c4c;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.4;
        font-family: sans-serif;
        overflow: hidden;
        margin: 0;
        padding: 0;

    }
    a {
        color: #173f77;
        text-decoration: none;
    }

    .grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-gap: 1rem;
    }

    .fz24 {
      font-size: 24px;
    }

    .fz20 {
      font-size: 20px;
    }

    .fz18 {
      font-size: 18px;
    }

    .fz14{
      font-size: 14px;
    }

    .fz12 {
      font-size: 12px;
    }

    .fz11 {
      font-size: 11px;
    }

    .fz10 {
      font-size: 10px;
    }

    .mb1 {
      margin-bottom: 1em;
    }

    .mb2 {
      margin-bottom: 2em;
    }

    .mt1 {
      margin-top: 1em;
    }
    
    .mt2 {
      margin-top: 2em;
    }

    .mt3 {
      margin-top: 3em;
    }

    .mr1 {
      margin-right: 1em;
    }

    .fbold {
      font-weight: bold;
    }

    .fNormal {
      font-weight: normal;
    }

    .bg-red {
      background-color: red;
    }

    .bg-orange {
      background-color: orange
    };

    .bg-yellow {
      background-color: #ffcb07;
    }
    
    .cl-white {
      color: white;
    }

    .cl-black {
      color: black;
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

const Theme = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
);

export default Theme;
