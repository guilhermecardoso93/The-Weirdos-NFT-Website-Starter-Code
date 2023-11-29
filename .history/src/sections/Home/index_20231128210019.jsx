import { CoverVideo } from "../../components/CoverVideo";
import { TypeWriter } from "../../components/TypeWriter";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";
import { Section, Container, Box, Round, Circle } from "./style";

export function Home() {
  return (
    <Section>
      <Container>
        <Box>
          <TypeWriter />
        </Box>
        <Box>
          <CoverVideo />
        </Box>
        <Round>
          <Circle>
            &#x2193; 
          </Circle>
          <img src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
    </Section>
  );
}
