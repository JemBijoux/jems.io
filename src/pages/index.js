import React from "react"
import styled from "react-emotion"

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  background-color: black;
`

const CenteredLabel = styled.h1`
  flex: 0 0 auto;
  margin: 0;
  transform: rotate(-30deg);
  color: currentColor;
`

export default () => (
  <Wrapper>
    <CenteredLabel>jems.io</CenteredLabel>
  </Wrapper>
)
