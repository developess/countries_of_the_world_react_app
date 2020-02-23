import { normalize } from "./normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Cutive Mono';
  }

  a {
    color: inherit;
  }
`;
