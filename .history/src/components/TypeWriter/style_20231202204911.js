import styled from "styled-components";
import "@fontsource/akaya-telivigala";

export const Container = styled.div`
  width: 80%;
  align-self: flex-start;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
    -webkit-text-stroke: 0.45px rgba(255, 255, 255, 0.1);
  }

  .text-1 {
    color: #3936f6;
  }

  .text-2 {
    color: #d5690a;
  }

  .text-3 {
    color: #d50a1c;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}),0.6`};
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;
