import { DrawSvg } from "../../components/DrawSvg";
import { Section, Title, Container, SvgContainer, Items } from "./style";

export function Roadmap() {
  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
            <DrawSvg />
        </SvgContainer>
        <Items>

        </Items>
      </Container>
    </Section>
  )
}