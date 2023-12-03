import styled from "styled-components";
import Arrow from "../../assets/Arrow.svg";


export const Container = styled.div`
  width: 25vw;
  height: 70vh;
  color: ${(props) => props.theme.text};

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 70em) {
    height: 60vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    width: 100%;
    height: 70vh;
    background: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;
    background: url(${Arrow}) center;
    background-size: cover;
    width: 4rem;

    &:after {
      display: none;
    }
  }

  .swiper-button-prev {
    left: 0;
    transform: rotate(180deg);
  }
`;
