import { DrawSvg } from "../../components/DrawSvg";
import { Section, Title, Container, SvgContainer, Items, Item, ItemContainer, Text, SubTitle, Box } from "./style";

function RoadMapItem({ title, subText}) {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>
            {title}
          </SubTitle>
          <Text>
            {subText}
          </Text>
        </Box>
      </ItemContainer>
    </Item>)
}

export function Roadmap() {
  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
            <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp</Item>
          <RoadMapItem title="This title" subText='this a example' />
          <RoadMapItem title="This title" subText='this a example' />
          <RoadMapItem title="This title" subText='this a example' />
        </Items>
      </Container>
    </Section>
  )
}