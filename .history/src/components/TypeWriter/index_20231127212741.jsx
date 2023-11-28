import Typewriter from "typewriter-effect";
import { Title, Subtitle } from "./style";

export function TypeWriter() {
  return (
    <Title>
      Discover a new era of coll
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<span class="text-1">NFTs.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">Collectible Items.</span>')
            .pauseFor(200)
            .deleteAll()
            .typeString('<span class="text-3">Ape Killers.</span>')
            .start();
        }}
      />
    </Title>
  );
}
