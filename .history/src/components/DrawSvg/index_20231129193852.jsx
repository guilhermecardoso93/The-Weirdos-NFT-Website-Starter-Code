import styled from "styled-components"
import gsap from "gsap";
import Vector from "../../Icons/Vector"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`
export function DrawSvg() {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger)

  return (
    <VectorContainer>
      <Vector />
    </VectorContainer>
  )
}