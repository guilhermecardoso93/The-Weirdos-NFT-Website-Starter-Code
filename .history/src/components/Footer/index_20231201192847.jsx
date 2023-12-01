import { Banner } from "../Banner";
import { Logo } from "../Logo";

import FacebookIcon from "../../Icons/Facebook";
import InstagramIcon from "../../Icons/Instagram";
import LinkedinIcon from "../../Icons/LinkedIn";
import TwitterIcon from "../../Icons/Twitter";
import { Section, Container, Left, IconList, MenuItems, Item } from "./style";

export function Footer() {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="/" target="_blank" rel="noopener">
              <FacebookIcon />
            </a>
            <a href="/" target="_blank" rel="noopener">
              <InstagramIcon />
            </a>
            <a href="/" target="_blank" rel="noopener">
              <LinkedinIcon />
            </a>
            <a href="/" target="_blank" rel="noopener">
              <TwitterIcon />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Roadmap</Item>
          <Item>Showcase</Item>
          <Item>Team</Item>
          <Item>Faq</Item>
        </MenuItems>
      </Container>
    </Section>
  );
}
