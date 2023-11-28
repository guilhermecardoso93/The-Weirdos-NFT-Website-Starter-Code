import Typewriter from "typewriter-effect";
import { Title } from "./style";

export function TypeWriter() {
  return (
    <Title>
      Discover a new era of coll
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("NFTs");
        }}
      />
    </Title>
  );
}
