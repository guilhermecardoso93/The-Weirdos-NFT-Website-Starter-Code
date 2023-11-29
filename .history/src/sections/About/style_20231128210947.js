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