import React from 'react';
import styled from "styled-components";
import './App.css';
import { ResponsivePlayer } from "./components/ResponsivePlayer";
import { pxToRem } from "./utils";
import { Header } from "./components/Header";
import { VideoDetails } from "./components/VideoDetails";
import constants from "./constants";
import { ChannelDetails } from "./components/ChannelDetails";

function App() {
  return (
    <MobileView>
      <Main>
        <Header/>
        <ResponsivePlayer url={'https://www.youtube.com/watch?v=JKCgwL-IfgM'} />
        <VideoDetails title={constants.VIDEO_TITLE} views={'150K'} likes={'1.4K'} dislikes={'218'} shareLink={''}/>
        <ChannelDetails logoUrl={"https://yt3.ggpht.com/a/AATXAJwuTmBKZD9sTE28x5qOHN_vRCPCP528iQeVqauh=s176-c-k-c0xffffffff-no-rj-mo"} channelName={'LevelUp Tuts'} subscribers={'324K'}/>
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
