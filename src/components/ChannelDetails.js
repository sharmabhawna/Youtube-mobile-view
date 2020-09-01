import React from 'react';
import styled from "styled-components";
import { LabelValue } from "./common/LabelValue";
import { pxToRem } from "../utils";

export const ChannelDetails = ({ logoUrl, channelName, subscribers }) => {
  return (
    <>
      <hr />
      <Wrapper>
        <Details>
          <StyledImage src={logoUrl} />
          <LabelValueStyled label={<ChannelName>{channelName}</ChannelName>} value={`${subscribers} subscribers`}/>
        </Details>
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

const Details = styled.div`
  display: flex;
`

const StyledImage = styled.img`
  height: ${pxToRem(50)};
  border-radius: 100%;
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
