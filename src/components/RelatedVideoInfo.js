import React from 'react';
import styled from "styled-components";
import { pxToRem } from "../utils";

export const RelatedVideoInfo = ({ video }) => (
  <Wrapper>
    <RelatedVideoImage src={video.url} />
    <VideoInfo>
      <div>{video.title}</div>
      <span>{video.channelName}</span>
      <span>{video.views} views</span>
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