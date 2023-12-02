import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  li {
    margin: 0 1rem;
    color: ${(props) => props.theme.text};
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0%;
      height: 2px;
      background-color: ${(props) => props.theme.text};
      transition: width 0.3 ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  display: none;
`;

export const HamburgerMenu = styled.span`
  width: 1.5rem;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? `translateX(-50%) rotate(90deg)`
      : `translateX(-50%) rotate(0)`};
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  &::after,
  &::before {
    content: "";
    width: 1.5rem;
    height: 2px;
  }
  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? `rotate(-40deg)` : `rotate(0)`)};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? `rotate(40deg)` : `rotate(0)`)};
  }
`;