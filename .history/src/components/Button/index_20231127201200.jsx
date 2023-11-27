import styled from "styled-components";

const ButtonMain = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.textColor};
  color: none;
  border: none;

  font-size: ${props => props.theme.fontsm};
  padding: 0.8rem 2.5rem;
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
