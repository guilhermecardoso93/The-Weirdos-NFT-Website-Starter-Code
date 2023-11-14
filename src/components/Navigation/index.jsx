import { Logo } from "../Logo";
import { Section, NavBar, Menu } from "./style";

export function Navigation() {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <li>Home</li>
          <li>About</li>
          <li>RoadMap</li>
          <li>Showcase</li>
          <li>Team</li>
          <li>Faq</li>
        </Menu>
        <h2>button</h2>
      </NavBar>
      </Section>
  )
}