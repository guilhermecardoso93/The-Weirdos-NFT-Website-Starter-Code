import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import Vector from "../../Icons/Vector";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";

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
`;

const Bounce = keyframes`
  from {transform: translateX(-50%) scale(0.5);}
  to {transform: translateX(-50%) scale(1);}
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.text};
  animation: ${Bounce} 0.5s linear infinite alternate;
`;



export function DrawSvg() {
  const ref = useRef(null);
  const Ballref = useRef(null);
  
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    let svg = document.getElementsByClassName("svg-path")[0];

    const length = svg.getTotalLength();

    //start positioning of svg drawing
    svg.style.strokeDasharray = length;
    //hide svg before scrolling start
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          const draw = length * self.progress;

          //also reverse the drawing when scroll goes up
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: self => {
          if(self.isActive){

          } else {

          }
        }
      },
    });

    return () => {};
  }, []);

  return (
    <>
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
}
