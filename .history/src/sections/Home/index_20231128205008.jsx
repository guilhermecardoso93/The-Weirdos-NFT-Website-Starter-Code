import { CoverVideo } from "../../components/CoverVideo";
import { TypeWriter } from "../../components/TypeWriter";
import { Section, Container, Box } from "./style";

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
      </Container>
    </Section>
  );
}
