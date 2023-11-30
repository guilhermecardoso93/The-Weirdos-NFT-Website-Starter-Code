import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.text};
`;

const move = keyframes`
  0%{ transform: translateX(100%)}
  100%{ transform: translateX(-100%)}
`;

export const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} 20s linear infinite ${(props) => props.direction} div {
    width: 5rem;
    height: 5rem;
    margin: 2rem;
  }
`;

export const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;
export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5`};
`;
