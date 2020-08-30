import React from 'react';
import styled from "styled-components";
import './App.css';
import { ResponsivePlayer } from "./components/ResponsivePlayer";
import { pxToRem } from "./utils";
import { Header } from "./components/Header";

function App() {
  return (
    <MobileView>
      <Main>
        <Header/>
        <ResponsivePlayer url={'https://www.youtube.com/watch?v=JKCgwL-IfgM&app=mobile'} />
      </Main>
    </MobileView>
  );
}

const Main = styled.div`
  width: ${pxToRem(500)};
`

const MobileView = styled.div`
  width: ${pxToRem(600)};
  padding-top: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`
export default App;
