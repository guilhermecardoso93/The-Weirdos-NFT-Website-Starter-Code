import { Button } from "../Button";
import { Logo } from "../Logo";
import { Section, NavBar, Menu } from "./style";

export function Navigation() {
  function scrollTo(id) {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
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
        <Button
          text="Connect Wallet"
          link="
          https://google.com"
        />
      </NavBar>
    </Section>
  );
}
