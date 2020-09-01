import React from 'react';
import styled from "styled-components";
import { LabelValue } from "./common/LabelValue";
import { pxToRem } from "../utils";

export const ChannelDetails = ({ logoUrl, channelName, subscribers }) => {
  return (
    <>
      <hr />
      <Wrapper>
        <ChannelInfo>
          <ChannelLogo><img src={logoUrl} height={'50px'} /></ChannelLogo>
          <LabelValueStyled label={<ChannelName>{channelName}</ChannelName>} value={`${subscribers} subscribers`}/>
        </ChannelInfo>
        <SubscribeLink>SUBSCRIBE</SubscribeLink>
      </Wrapper>
      <hr />
    </>
  );
};

const Wrapper = styled.div`
  color: #707070;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ChannelInfo = styled.div`
  display: flex;
`

const ChannelLogo = styled.div`
  margin-right: ${pxToRem(18)};
`

const ChannelName = styled.span`
  color: #030303;
  font-size: ${pxToRem(20)};
`

const SubscribeLink = styled.a`
  color: #cf100c;
  font-size: ${pxToRem(18)};
  font-weight: 650;
`

const LabelValueStyled = styled(LabelValue)`
  align-items: flex-start;
`