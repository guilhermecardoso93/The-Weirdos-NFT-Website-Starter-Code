import { useRef, useLayoutEffect } from "react";
import useWindowScroll from "react-use/lib/useWindowScroll";
import styled from "styled-components";

export function ScrollArrowToTop() {
  const ref = useRef(null);
  const { y } = useWindowScroll();

  function scrollToTop() {
    let element = document.getElementById("navbar");

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  useLayoutEffect(() => {
    if (y > 200) {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  }, [y]);
  return (
    <Up ref={ref} onClick={() => scrollToTop()}>
      &#x2191;
    </Up>
  );
}

const Up = styled.div`
  width: 3rem;
  height: 3rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 6;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;
