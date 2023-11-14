import { Logo } from "../Logo";
import { Section, NavBar } from "./style";

export function Navigation() {
  return (
    <Section>
      <NavBar>
        <Logo />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>RoadMap</li>
          <li>Showcase</li>
          <li>Team</li>
          <li>Faq</li>
        </ul>
        <h2>button</h2>
      </NavBar>
      </Section>
  )
}