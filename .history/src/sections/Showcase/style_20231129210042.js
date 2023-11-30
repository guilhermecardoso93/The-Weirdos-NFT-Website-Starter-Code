import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.text};
`;

const move = keyframes`
  0%{ transform: translateX(100%)}
  100%{ transform: translateX(-100%)}
`;

export const Row = styled.div`
  background-color: ;
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite;

  div {
    width: 5rem;
    height: 5rem;
    margin: 2rem;
  }
`;
