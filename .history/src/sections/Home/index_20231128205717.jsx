import { CoverVideo } from "../../components/CoverVideo";
import { TypeWriter } from "../../components/TypeWriter";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png"
import { Section, Container, Box, Round } from "./style";

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
          <img src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
    </Section>
  );
}
