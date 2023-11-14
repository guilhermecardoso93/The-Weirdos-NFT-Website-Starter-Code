import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { light } from "./styles/Theme";

export function App() {
  return (
    <>
      <GlobalStyles />
        <ThemeProvider theme={light}>
          App File
        </ThemeProvider>
    </>
  );
}

