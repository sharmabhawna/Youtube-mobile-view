import React from 'react';
import styled from "styled-components";
import { pxToRem } from "../utils";
import { RelatedVideoInfo } from "./RelatedVideoInfo";
import { Toggle } from "./common/Toggle";

export const RelatedVideos = ({ videos }) => {
  return (
    <Wrapper>
      <StyledDiv>
        <span>Up next</span>
        <span>Autoplay</span>
        <Toggle/>
      </StyledDiv>
        {
          videos.map(video => <RelatedVideoInfo video={video}/>)
        }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: ${pxToRem(20)};
  padding: ${pxToRem(4)} ${pxToRem(20)};
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${pxToRem(16)};
`
