import React from 'react';
import styled from "styled-components";
import { pxToRem } from "../utils";

export const RelatedVideoInfo = ({ video }) => (
  <Wrapper>
    <RelatedVideoImage src={video.url} />
    <VideoInfo>
      <div>{video.title}</div>
      <StyledSpan>{video.channelName}</StyledSpan>
      <StyledSpan>{video.views} views</StyledSpan>
    </VideoInfo>
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: ${pxToRem(18)};
  display: flex;
  margin-bottom: ${pxToRem(16)};
`

const RelatedVideoImage = styled.img`
  width: ${pxToRem(200)};
  margin-right: ${pxToRem(12)};
`

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledSpan = styled.span`
  color: #707070;
  font-size: ${pxToRem(16)};
  line-height: 1.5;
`
