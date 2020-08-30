import React from "react";
import ReactPlayer from "react-player/youtube";
import './ResponsivePlayer.css'

export const ResponsivePlayer = ({url}) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        controls={true}
        width='100%'
        height='100%'
      />
    </div>
  )
}
