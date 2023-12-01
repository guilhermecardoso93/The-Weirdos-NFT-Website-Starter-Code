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
    <Section id='navbar'>
      <NavBar>
        <Logo />
        <Menu>
          <li onClick={() => scrollTo('home')}>Home</li>
          <li onClick={() => scrollTo('about')}>About</li>
          <li onClick={() => scrollTo('roadmap')}>RoadMap</li>
          <li onClick={() => scrollTo('showcase')}>Showcase</li>
          <li onClick={() => scrollTo('team')}>Team</li>
          <li onClick={() => scrollTo('faq')}>Faq</li>
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
