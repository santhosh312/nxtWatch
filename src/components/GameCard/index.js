import React from 'react'
import {Link} from 'react-router-dom'
import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'
import './index.css'
import {ChannelName, VideoTitle} from '../../styledComponents'

export default function GameCard(props) {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details

  return (
    <nxtWatchContext.Consumer>
      {value => {
        const {isdark} = value
        return (
          <Link
            style={{textDecoration: 'none'}}
            to={`/videos/${id}`}
            className="game-card-container"
          >
            <img src={thumbnailUrl} alt="video thumbnail" />
            <VideoTitle isdark={isdark}>{title}</VideoTitle>
            <ChannelName>{viewCount} Watching Worldwide</ChannelName>
          </Link>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}
