import { DrawSvg } from "../../components/DrawSvg";
import { Section, Title, Container, SvgContainer } from "./style";

export function Roadmap() {
  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
            <DrawSvg />
        </SvgContainer>
      </Container>
    </Section>
  )
}