import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #e9c46a;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui;
  }

  main {
   margin-bottom: 75px;
  }

`;
