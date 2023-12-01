import styled from "styled-components";

import img01 from "../../assets/Nfts/bighead.svg";
import img02 from "../../assets/Nfts/bighead-1.svg";
import img03 from "../../assets/Nfts/bighead-2.svg";
import img04 from "../../assets/Nfts/bighead-3.svg";
import img05 from "../../assets/Nfts/bighead-4.svg";
import img06 from "../../assets/Nfts/bighead-5.svg";
import { Button } from "../Button";

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
      <Title>
        Join the <br /> weirdos club
      </Title>
      <Button>
        Join Now
      </Button>
    </Section>
  );
}
const JoinNow = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -40%) scale(1);
    padding: 0.3rem;
  }
`;

const BtnContainer = styled.div``;

const Section = styled.div`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
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

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-weight: 500;
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    width: 40%;
    text-align: center;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    width: 100%;
    padding: 2rem 0;
  }
`;
