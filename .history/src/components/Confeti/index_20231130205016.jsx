import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function ConfettiEffect() {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
}
