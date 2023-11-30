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
  color: ${(props) => props.theme.text};
  border-bottom: 3px solid ${(props) => props.theme.text};
  margin: 1rem auto;
  width: fit-content;
`;

export const SubTitle = styled.span`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  border-bottom: 3px solid ${(props) => props.theme.text};
  margin: 1rem auto;
  width: fit-content;
`;

export const Text = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  border-bottom: 3px solid ${(props) => props.theme.text};
  margin: 1rem auto;
  width: fit-content;
`;

export const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.carouselColor};
`

export const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`

export const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${props => props.theme.text}
`