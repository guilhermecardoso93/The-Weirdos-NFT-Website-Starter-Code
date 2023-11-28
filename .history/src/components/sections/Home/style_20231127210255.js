import styled from "styled-components";

export const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  width:100vw;
  position: relative;
  background-color: ${props => props.theme.text}
`;

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`
