import { Banner } from "../Banner";
import { Logo } from "../Logo";

import FacebookIcon from "../../Icons/Facebook";
import InstagramIcon from "../../Icons/Instagram";
import LinkedInIcon from "../../Icons/LinkedIn";
import TwitterIcon from "../../Icons/Twitter";
import {
  Section,
  Container,
  Left,
  IconList,
  MenuItems,
  Item,
  Bottom,
} from "./style";

export function Footer() {
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
              <LinkedInIcon />
            </a>
            <a href="/" target="_blank" rel="noopener">
              <TwitterIcon />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>About</Item>
          <Item onClick={() => scrollTo("roadmap")}>RoadMap</Item>
          <Item onClick={() => scrollTo("showcase")}>Showcase</Item>
          <Item onClick={() => scrollTo("team")}>Team</Item>
          <Item onClick={() => scrollTo("faq")}>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy;{new Date().getFullYear()} Weirdos Club. All Rights Reserved.
        </span>
        <span>
          Made with 🖤 by {""}
          <a
            href="https://youtube.com/codebucks"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeBucks
          </a>
        </span>
      </Bottom>
    </Section>
  );
}
