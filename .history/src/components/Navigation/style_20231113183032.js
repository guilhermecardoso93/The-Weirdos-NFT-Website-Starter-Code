import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body};
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: 5rem;
`