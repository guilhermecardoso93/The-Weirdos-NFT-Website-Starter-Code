import styled from "styled-components";

export const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight}px)`};
`
