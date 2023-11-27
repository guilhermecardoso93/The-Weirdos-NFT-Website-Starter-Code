import styled from "styled-components";

const ButtonMain = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  outline: none;
  border: none;

  font-size: ${props => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;

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