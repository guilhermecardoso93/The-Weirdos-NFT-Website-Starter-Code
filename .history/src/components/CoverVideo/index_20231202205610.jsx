import VideoHome from "../../assets/Home Video.mp4";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

export function CoverVideo() {
  return (
    <Section>
      <video src={VideoHome} type="video/mp4" autoPlay muted loop />
    </Section>
  );
}
