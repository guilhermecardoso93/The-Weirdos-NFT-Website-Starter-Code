import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  //align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${(props) => props.theme.body};
`

export const Left = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`

export const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;