import { createGlobalStyle } from "styled-components";
import {theme} from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
      -webkit-user-drag: none;
      user-select: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
      font-family: 'Satoshi';
      src: url('/fonts/Satoshi-Regular.otf') format('opentype');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
      font-family: 'Satoshi';
      src: url('/fonts/Satoshi-Bold.otf') format('opentype');
      font-weight: 700;
      font-style: normal;
  }

  body {
      font-family: 'Satoshi', sans-serif;
      margin: 0;
      padding: 0;
      background-color: ${theme.colors.background};
      color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;


export default GlobalStyle;