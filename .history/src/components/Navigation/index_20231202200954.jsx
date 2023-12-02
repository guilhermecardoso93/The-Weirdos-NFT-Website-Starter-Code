import { useState } from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { Section, NavBar, Menu, HamburgerMenu } from "./style";

export function Navigation() {
  const [click, setClick] = useState(false);

  function scrollTo(id) {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click)
  }
  return (
    <Section id="navbar">
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}> &nbsp;</HamburgerMenu>
        <Menu>
          <li onClick={() => scrollTo("home")}>Home</li>
          <li onClick={() => scrollTo("about")}>About</li>
          <li onClick={() => scrollTo("roadmap")}>RoadMap</li>
          <li onClick={() => scrollTo("showcase")}>Showcase</li>
          <li onClick={() => scrollTo("team")}>Team</li>
          <li onClick={() => scrollTo("faq")}>Faq</li>
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
