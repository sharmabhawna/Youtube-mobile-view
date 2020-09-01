import React from 'react';
import styled from "styled-components";
import { pxToRem } from "../utils";
import { ReactComponent as Like} from '../assets/icons/like.svg'
import { ReactComponent as Dislike} from '../assets/icons/dislike.svg'
import { ReactComponent as Share} from '../assets/icons/share.svg'
import { ReactComponent as Save} from '../assets/icons/save.svg'
import { ReactComponent as Report} from '../assets/icons/report.svg'
import { LabelValue } from "./common/LabelValue";

export const VideoDetails = ({title, views, likes, dislikes}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Views>{views} views</Views>
      <Actions>
        <LabelValue label={<Like/>} value={likes}/>
        <LabelValue label={<Dislike/>} value={dislikes}/>
        <LabelValue label={<Share/>} value={'Share'}/>
        <LabelValue label={<Save/>} value={'Save'}/>
        <LabelValue label={<Report/>} value={'Report'}/>
      </Actions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #707070;
  padding: ${pxToRem(16)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.span`
  color: #030303;
  font-size: ${pxToRem(24)};
`

const Views = styled.span`
  margin-top: ${pxToRem(5)};
`

const Actions = styled.div`
  font-weight: 600;
  padding: ${pxToRem(12)} ${pxToRem(24)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
