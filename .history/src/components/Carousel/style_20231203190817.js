import styled from "styled-components";
import Arrow from "../../assets/Arrow.svg";

export const Container = styled.div`
  width: 25vw;
  height: 70vh;
  padding-top: 2rem;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
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
    height: 100%;
    width: 100%;

    &-slide {
      background-color: ${(props) => props.theme.carouselColor};
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        width: 100%;
        height: 80%;
        object-fit: cover;
      }
    }

    &-button-next {
      width: 4rem;
      right: 0;
      top: 60%;
      color: ${(props) => props.theme.text};
      background-image: url(${Arrow});
      background-position: center;
      background-size: cover;

      &::after {
        display: none;
      }

      @media (max-width: 64em) {
        width: 3rem;
      }

      @media (max-width: 30em) {
        width: 2rem;
      }
    }

    &-button-prev {
      width: 4rem;
      left: 0;
      top: 60%;
      color: ${(props) => props.theme.text};
      transform: rotate(180deg);
      background-image: url(${Arrow});
      background-position: center;
      background-size: cover;

      &::after {
        display: none;
      }

      @media (max-width: 64em) {
        width: 3rem;
        justify-content: center;
      }

      @media (max-width: 30em) {
        width: 2rem;
      }
    }
  }
`;
