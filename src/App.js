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
  VIDEO_DISLIKES,
  VIDEO_LIKES,
  VIDEO_TITLE,
  VIDEO_URL
} from "./constants";

function App() {
  return (
    <MobileView>
      <Main>
        <Header />
        <ResponsivePlayer url={VIDEO_URL} />
        <VideoDetails title={VIDEO_TITLE} views={VIDEO_LIKES} likes={VIDEO_LIKES} dislikes={VIDEO_DISLIKES} />
        <ChannelDetails logoUrl={CHANNEL_LOGO_URL} channelName={CHANNEL_NAME} subscribers={CHANNEL_SUBSCRIBERS} />
      </Main>
    </MobileView>
  );
}

const Main = styled.div`
  width: ${pxToRem(500)};
  border: 1px solid #9A9A9A;
  z-index: 1;
  background-color: white;
`

const MobileView = styled.div`
  width: ${pxToRem(600)};
  padding-top: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`

export default App;
