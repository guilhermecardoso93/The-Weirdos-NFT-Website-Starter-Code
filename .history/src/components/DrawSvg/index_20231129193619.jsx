import styled from "styled-components"

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
  return (
    <VectorContainer>

    </VectorContainer>
  )
}