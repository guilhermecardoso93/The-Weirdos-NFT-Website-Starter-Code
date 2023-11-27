import styled from "styled-components";

const ButtonMain = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.text};
`;

export function Button({ link, text }) {
  return (
    <ButtonMain>
      <a href={link} aria-label={text} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </ButtonMain>
  );
}
