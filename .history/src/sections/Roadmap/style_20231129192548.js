import styled, { keyframes } from "styled-components";

export const Section = styled.section `
  min-height:100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`;

export const Container = styled.div`
  width: 75%;
  height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
