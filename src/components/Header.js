import React from 'react';
import styled from "styled-components";
import { ReactComponent as Play } from '../assets/icons/play.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Menu } from '../assets/icons/three-dots.svg';
import { pxToRem } from "../utils";

export const Header = () => (
  <Container>
    <StyledDiv>
      <Play />
      <Title>Premium</Title>
    </StyledDiv>
    <StyledDiv>
      <StyledSearch />
      <Menu />
    </StyledDiv>
  </Container>
);

const Container = styled.div`
  color: #f7f7f7;
  background: #222222;
  font-size: ${pxToRem(24)};
  padding: ${pxToRem(20)};
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.span`
  margin-left: ${pxToRem(5)};
`

const StyledSearch = styled(Search)`
  margin-right: ${pxToRem(30)};
`
