import { Section, Title, Container, Item, ImageContainer } from "./style";

import img01 from "../../assets/Nfts/bighead.svg";
import img02 from "../../assets/Nfts/bighead-1.svg";
import img03 from "../../assets/Nfts/bighead-2.svg";
import img04 from "../../assets/Nfts/bighead-3.svg";
import img05 from "../../assets/Nfts/bighead-4.svg";
import img06 from "../../assets/Nfts/bighead-5.svg";
import img07 from "../../assets/Nfts/bighead-6.svg";
import img08 from "../../assets/Nfts/bighead-7.svg";
import img09 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-9.svg";

function MemberComponent({img, name='', postion=''}) {
  return (
    <Item>
      <ImageContainer>
        <imr src={img} alt={name} />
      </ImageContainer>
    </Item>
  )
}

export function Team() {
  return (
    <Section>
      <Title>Team</Title>
      <Container>

      </Container>
    </Section>
  );
}
