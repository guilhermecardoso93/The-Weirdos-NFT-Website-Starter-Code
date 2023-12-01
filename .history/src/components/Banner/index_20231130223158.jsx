import styled from "styled-components";

import img01 from "../../assets/Nfts/bighead.svg";
import img02 from "../../assets/Nfts/bighead-1.svg";
import img03 from "../../assets/Nfts/bighead-2.svg";
import img04 from "../../assets/Nfts/bighead-3.svg";
import img05 from "../../assets/Nfts/bighead-4.svg";
import img06 from "../../assets/Nfts/bighead-5.svg";

export function Banner() {
  return (
    <Section>
      <ImgContainer>
        <img src={img01} alt="The Weirdos" />
        <img src={img02} alt="The Weirdos" />
        <img src={img03} alt="The Weirdos" />
        <img src={img04} alt="The Weirdos" />
        <img src={img05} alt="The Weirdos" />
        <img src={img06} alt="The Weirdos" />
      </ImgContainer>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};

  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15rem;
    height: auto;
  }

  @media (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;
