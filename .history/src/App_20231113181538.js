import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { light } from "./styles/Theme";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/sections/Home";

export function App() {
  return (
    <>
      <GlobalStyles />
        <ThemeProvider theme={light}>
          <Navigation />
          <Home />
        </ThemeProvider>
    </>
  );
}

