import styled from "styled-components";

export const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  width:100vw;
  position: relative;
  background-color: ${props => props.theme.body}
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
