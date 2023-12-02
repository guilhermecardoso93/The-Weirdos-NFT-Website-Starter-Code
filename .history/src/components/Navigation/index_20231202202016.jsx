import { useState } from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { Section, NavBar, Menu, HamburgerMenu, ListItem } from "./style";

export function Navigation() {
  const [click, setClick] = useState(false);

  function scrollTo(id) {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  }
  return (
    <Section id="navbar">
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <ListItem onClick={() => scrollTo("home")}>Home</ListItem>
          <ListItem onClick={() => scrollTo("about")}>About</ListItem>
          <ListItem onClick={() => scrollTo("roadmap")}>Roadmap</ListItem>
          <ListItem onClick={() => scrollTo("showcase")}>Showcase</ListItem>
          <ListItem onClick={() => scrollTo("team")}>Team</ListItem>
          <ListItem onClick={() => scrollTo("faq")}>Faqs</ListItem>
          <ListItem>
            <div className="mobile">
              <Button
                text="Connect Wallet"
                link="
          https://google.com"
              />
            </div>
          </ListItem>
        </Menu>
        <div className="desktop">
          <Button
            text="Connect Wallet"
            link="
          https://google.com"
          />
        </div>
      </NavBar>
    </Section>
  );
}
