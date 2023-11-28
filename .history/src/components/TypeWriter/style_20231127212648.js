import styled from "styled-components";

export const Title = styled.h2`
 font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  span {
    text-transform: uppercase;
    font-family: "Akaya Talivigala", cursive;
  }

  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: red;
  }
  
`


