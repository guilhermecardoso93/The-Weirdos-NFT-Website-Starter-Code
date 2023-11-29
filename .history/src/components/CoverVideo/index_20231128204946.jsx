import VideoHome from "../../assets/Home GIF.gif";
import styled from "styled-components";

const Section = styled.div``;

export function CoverVideo() {
  return (
    <Section>
      <video src={VideoHome} />
    </Section>
  );
}
