import React from 'react';
import styled from "styled-components";
import { pxToRem } from "../../utils";

export const LabelValue = ({label, value, ...restProps}) => (
  <Wrapper {...restProps}>
    <span>{label}</span>
    <StyledSpan>{value}</StyledSpan>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledSpan = styled.span`
  margin-top: ${pxToRem(5)};
`
