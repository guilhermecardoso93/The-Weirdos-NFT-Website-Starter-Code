import { Logo } from "../Logo";
import { Section, NavBar } from "./style";

export function Navigation() {
  return (
    <Section>
      <NavBar>
        <Logo />
        <h2>menu</h2>
        <h2>button</h2>
      </NavBar>
      </Section>
  )
}