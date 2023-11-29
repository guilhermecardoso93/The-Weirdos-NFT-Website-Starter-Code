import { Carousel } from "../../components/Carousel";
import { Button } from "../../components/Button";
import {
  Section,
  Container,
  Box,
  Title,
  SubText,
  SubTitleText,
  ButtonContainer,
} from "./style";

export function About() {
  return (
    <Section>
      <Container>
        <Box>
          <Carousel />
        </Box>

        <Box>
          <Title>Welcome To The Weirdos Club.</Title>
          <SubText>
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTitleText>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTitleText>
          <ButtonContainer>
            <Button text={"JOIN OUR DISCORD"} link="#discord" />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
}
