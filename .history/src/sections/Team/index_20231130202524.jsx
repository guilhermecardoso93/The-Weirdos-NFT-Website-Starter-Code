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
    { img: img01, name: "Guilherme", position: "Manager" },
    { img: img02, name: "Guilherme", position: "Manager" },
    { img: img03, name: "Guilherme", position: "Manager" },
    { img: img04, name: "Guilherme", position: "Manager" },
    { img: img05, name: "Guilherme", position: "Manager" },
    { img: img06, name: "Guilherme", position: "Manager" },
    { img: img07, name: "Guilherme", position: "Manager" },
    { img: img08, name: "Guilherme", position: "Manager" },
    { img: img09, name: "Guilherme", position: "Manager" },
    { img: img10, name: "Guilherme", position: "Manager" },
  ];

  return (
    <Section>
      <Title>Team</Title>
      <Container>
        {imagens.map((imagem, index) => (
          <Item key={index}>
            <ImageContainer>
              <img src={imagem.img} alt={imagem.name} />
            </ImageContainer>
            <Name>{imagem.name}</Name>
            <Position>{imagem.position}</Position>
          </Item>
        ))}
      </Container>
    </Section>
  );
}
