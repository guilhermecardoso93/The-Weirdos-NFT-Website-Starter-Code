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
import { ConfettiEffect } from "../../components/Confeti";

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
    { img: img01, name: "Skyblaze", position: "Founder" },
    { img: img02, name: "Megnum", position: "Co Founder" },
    { img: img03, name: "Monkey King", position: "Director" },
    { img: img04, name: "Black Panther", position: "Manager" },
    { img: img05, name: "Deathstroke", position: "Artist" },
    { img: img06, name: "Lazy Kong", position: "Manager" },
    { img: img07, name: "Guilherme", position: "Social Media Manager" },
    { img: img08, name: "Cyber Punk", position: "Blockchain Specialist" },
    { img: img09, name: "Monk", position: "Web3 Developer" },
    { img: img10, name: "Banana", position: "ManagGraphic Designer" },
  ];

  return (
    <Section>
      <ConfettiEffect />
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
