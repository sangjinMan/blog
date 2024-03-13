import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background-color: #121212;
    color: white;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  :root{
    @media screen and (min-width: 1024px) and (max-width: 1440px){
      font-size: 90%;
    }
  }
`;

export default GlobalStyle;
