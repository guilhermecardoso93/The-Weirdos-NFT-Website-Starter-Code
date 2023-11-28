import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/GlobalStyles";
import { light } from "./styles/Theme";

import { Navigation } from "./components/Navigation";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Roadmap } from "./sections/Roadmap";
import { Showcase } from "./sections/Showcase";
import { Team } from "./sections/Team";
import { Faq } from "./sections/Faq";

export function App() {
  return (
    <>
      <GlobalStyles />
        <ThemeProvider theme={light}>
          <Navigation />
          <Home />
          <About />
          <Roadmap />
          <Showcase />
          <Team />
          <Faq />
        </ThemeProvider>
    </>
  );
}

