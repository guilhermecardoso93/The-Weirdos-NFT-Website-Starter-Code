import {
  Section,
  Title,
  Container,
  Item,
  ImageContainer,
  Name,
  Position,
} from "./style";

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

function MemberComponent({ imagem, name = "", position = "" }) {
  return (
    <Item>
      <ImageContainer>
        <img src={imagem} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
}

export function Team(imagem, name = "", position = "") {
  const imagens = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
  ];

  return (
    <Section>
      <Title>Team</Title>
      <Container>
        {imagens.map((imagem, index) => (
          <Item>
            <ImageContainer>
              <img src={imagem} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
          </Item>
        ))}
      </Container>
    </Section>
  );
}
