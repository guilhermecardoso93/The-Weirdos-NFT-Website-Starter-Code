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

function NftItem({ img, number = 0, price = 0, passRef }) {
  function play(e) {
    passRef.current.style.animationPlayState = "running";
  }

  function pause(e) {
    passRef.current.style.animationPlayState = "paused";
  }
  return (
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
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
        <NftItem img={img01} price={5.2} passRef={Row1Ref}/>
        <NftItem img={img02} price={3.4}passRef={Row1Ref}/>
        <NftItem img={img03} price={3.1}passRef={Row1Ref}/>
        <NftItem img={img04} price={0.5}passRef={Row1Ref}/>
        <NftItem img={img05} price={6.0}passRef={Row1Ref}/>
        <NftItem img={img06} price={9.8}passRef={Row1Ref}/>
        <NftItem img={img07} price={3.0}passRef={Row1Ref}/>
        <NftItem img={img08} price={2.0}passRef={Row1Ref}/>
        <NftItem img={img09} price={4.5}passRef={Row1Ref}/>
        <NftItem img={img10} price={6.9}passRef={Row1Ref}/>
      </Row>
      <Row direction="reverse">
        <NftItem img={img06} price={4.9}passRef={Row2Ref}/>
        <NftItem img={img07} price={3.9}passRef={Row2Ref}/>
        <NftItem img={img08} price={2.2}passRef={Row2Ref}/>
        <NftItem img={img09} price={3.0}passRef={Row2Ref}/>
        <NftItem img={img10} price={5.8}passRef={Row2Ref}/>
        <NftItem img={img01} price={6.9}passRef={Row2Ref}/>
        <NftItem img={img02} price={6.9}passRef={Row2Ref}/>
        <NftItem img={img03} price={4.7}passRef={Row2Ref}/>
        <NftItem img={img04} price={5.7}passRef={Row2Ref}/>
        <NftItem img={img05} price={4.0}passRef={Row2Ref}/>
      </Row>
    </Section>
  );
}
