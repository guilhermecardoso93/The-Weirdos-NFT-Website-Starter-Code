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