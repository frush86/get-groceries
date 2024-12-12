import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #e9c46a;
    font-family: system-ui;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: grid;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    grid-template-rows: 1fr min-content;
  }

  main {
    padding-bottom: 80px;
  }
`;
