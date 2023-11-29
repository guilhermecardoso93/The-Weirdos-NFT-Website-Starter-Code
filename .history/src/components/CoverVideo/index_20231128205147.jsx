import VideoHome from "../../assets/Home Video.mp4";
import styled from "styled-components";

const Section = styled.div``;

export function CoverVideo() {
  return (
    <Section>
      <video src={VideoHome} />
    </Section>
  );
}
