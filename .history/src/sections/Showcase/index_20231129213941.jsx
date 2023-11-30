import { Section, Row, ImgContainer, Details, Price } from "./style";

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
import img11 from "../../assets/Nfts/bighead-10.svg";
import ETH from "../../assets/icons8-ethereum-48.png";
import { useRef } from "react";

function NftItem({ img, number = 0, price = 0 }) {
  return (
    <ImgContainer>
      <img src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span>
          <br />
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <h1>{Number(price).toFixed(1)}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
}

export function Showcase() {
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
    img11,
  ];
  
  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)

  return (
    <Section>
      <Row direction="none">
        <NftItem img={img01} />
        <NftItem img={img02} />
        <NftItem img={img03} />
        <NftItem img={img04} />
        <NftItem img={img05} />
        <NftItem img={img06} />
        <NftItem img={img07} />
        <NftItem img={img08} />
        <NftItem img={img09} />
        <NftItem img={img10} />
      </Row>
      <Row direction="reverse">
        <NftItem img={img06} />
        <NftItem img={img07} />
        <NftItem img={img08} />
        <NftItem img={img09} />
        <NftItem img={img10} />
        <NftItem img={img01} />
        <NftItem img={img02} />
        <NftItem img={img03} />
        <NftItem img={img04} />
        <NftItem img={img05} />
      </Row>
    </Section>
  );
}
