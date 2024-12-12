import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #e9c46a;
    margin: 0;
    font-family: system-ui;
  }

  main {
    padding-bottom: 80px;
  }
`;
