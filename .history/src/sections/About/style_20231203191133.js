import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 64em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 64em) {
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  width: 80%;
  align-self: flex-start;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

export const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  width: 80%;
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

export const SubTitleText = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.body};
  opacity: 0.6;
  width: 80%;
  align-self: flex-start;
  margin: 1rem auto;
`;

export const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  margin: 1rem auto;
`;
