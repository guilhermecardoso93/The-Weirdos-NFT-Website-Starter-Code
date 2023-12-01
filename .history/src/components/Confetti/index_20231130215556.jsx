import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import styled from "styled-components";

const Section = styled.section`
  z-index: -1;
  position: relative;
`;

export const ConfettiComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <Section>
      <Confetti
        numberOfPieces={150}
        gravity={0.01}
        width={width}
        height={height * 1.5}
      />
    </Section>
  );
};
