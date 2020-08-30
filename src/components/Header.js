import React from 'react';
import styled from "styled-components";
import { ReactComponent as Play } from '../assets/icons/play.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Menu } from '../assets/icons/three-dots.svg';
import { pxToRem } from "../utils";

export const Header = () => {
  return (
    <Container>
      <LeftShifted>
        <Play />
        <StyledSpan>Premium</StyledSpan>
      </LeftShifted>
      <RightShifted>
        <StyledSearch />
        <Menu />
      </RightShifted>
    </Container>
  );
};

const Container = styled.div`
  color: #f7f7f7;
  background: #1f1f1f;
  font-size: 24px;
  padding: 20px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftShifted = styled.div`
  display: flex;
  align-items: center;
`

const RightShifted = styled.div`
  display:flex;
  align-items: center;
`

const StyledSpan = styled.span`
  margin-left: ${pxToRem(5)};
`

const StyledSearch = styled(Search)`
  margin-right: ${pxToRem(30)};
`
