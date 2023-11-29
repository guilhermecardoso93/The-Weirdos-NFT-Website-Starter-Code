import VideoHome from "../../assets/Home Video.mp4";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;

  video{
    width: 100%;
    height: auto;
  }
`;

export function CoverVideo() {
  return (
    <Section>
      <video src={VideoHome} type='video/mp4' autoplay muted loop/>
    </Section>
  );
}
