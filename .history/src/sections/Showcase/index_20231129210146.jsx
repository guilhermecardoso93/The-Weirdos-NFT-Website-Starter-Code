import { Section, Row } from "./style";

export function Showcase() {
  return (
    <Section>
      <Row direction='none'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Row>
      <Row direction='reverse'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Row>
    </Section>
  )
}