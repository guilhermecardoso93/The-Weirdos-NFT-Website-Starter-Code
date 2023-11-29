import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

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