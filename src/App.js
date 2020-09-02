import React from 'react';
import styled from "styled-components";
import './App.css';
import { ResponsivePlayer } from "./components/ResponsivePlayer";
import { pxToRem } from "./utils";
import { Header } from "./components/Header";
import { VideoDetails } from "./components/VideoDetails";
import { ChannelDetails } from "./components/ChannelDetails";
import {
  CHANNEL_LOGO_URL,
  CHANNEL_NAME,
  CHANNEL_SUBSCRIBERS,
  RELATED_VIDEOS,
  VIDEO_DISLIKES,
  VIDEO_LIKES,
  VIDEO_TITLE,
  VIDEO_URL
} from "./constants";
import { RelatedVideos } from "./components/RelatedVideos";

function App() {
  return (
    <Main>
      <Header />
      <ResponsivePlayer url={VIDEO_URL} />
      <VideoDetails title={VIDEO_TITLE} views={VIDEO_LIKES} likes={VIDEO_LIKES} dislikes={VIDEO_DISLIKES} />
      <ChannelDetails logoUrl={CHANNEL_LOGO_URL} channelName={CHANNEL_NAME} subscribers={CHANNEL_SUBSCRIBERS} />
      <RelatedVideos videos={RELATED_VIDEOS} />
    </Main>
  );
}

const Main = styled.div`
  width: ${pxToRem(500)};
  padding-top: ${pxToRem(20)};
  border-left: 1px solid #dadadb;
  border-right: 1px solid #dadadb;
  background-color: white;
  z-index: 1;
`

export default App;
