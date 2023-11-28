import { createGlobalStyle } from "styled-components"

import '@fontsource/akaya-telivigala';
import '@fontsource-variable/sora';


export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after {
    margin: 0;
    padding: 0;
  }

  body {
  font-family: 'Sora Variable', sans-serif;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;  /* não funciona no IE e Edge */
  -webkit-font-smoothing: antialiased; /* apenas para Mac OS X/macOS */
  -moz-osx-font-smoothing: grayscale; /* apenas para Mac OS X/macOS */
  font-smooth: always; /* Non-standard */
}

  h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  }

  a {
  color: inherit;
  text-decoration: none;
  }
`