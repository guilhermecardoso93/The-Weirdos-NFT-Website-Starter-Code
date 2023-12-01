import { Banner } from "../Banner";
import { Logo } from "../Logo";
import { Section, Container, Left } from "./style";

export function Footer(){
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
        </Left>
      </Container>
    </Section>
  )
}