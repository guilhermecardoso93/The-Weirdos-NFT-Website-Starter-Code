import styled from "styled-components";

const ButtonMain = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
 
  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: 2px solid ${props => props.theme.text};
    transition: all 0.2s ease;
  }

  &:hover::after{
    transform: translate(-50%, -50) scale(1);
    padding: 0.5rem;
  }
`;

export function Button({ link, text }) {
  return (
    <ButtonMain>
      <a
        href={link}
        aria-label={text}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </ButtonMain>
  );
}
