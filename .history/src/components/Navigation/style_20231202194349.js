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
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  li {
    margin: 0 1rem;
    color: ${props => props.theme.text};
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      width: 0%;
      height: 2px;
      background-color: ${props => props.theme.text};
      transition: width 0.3 ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const HamburgerMenu = styled.span`
  width: 1.5rem;
  height: 2px;
  background-color: ${props => props.theme.text};

`