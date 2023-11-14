import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { light } from "./styles/Theme";
import { Navigation } from "./components/Navigation";

export function App() {
  return (
    <>
      <GlobalStyles />
        <ThemeProvider theme={light}>
          <Navigation />
        </ThemeProvider>
    </>
  );
}

