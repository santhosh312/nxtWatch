import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd, CgPlayListCheck} from 'react-icons/cg'
import {
  VideoTitle,
  VideoItemTitle,
  VideoItemLightText,
  VideoItemButton,
  HorizontalLine,
  SavedVideoItemButton,
} from '../../styledComponents'
import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'
import './index.css'

class RenderVideo extends Component {
  state = {isLiked: null}

  onLike = () => {
    this.setState({isLiked: true})
  }

  onDisLike = () => {
    this.setState({isLiked: false})
  }

  render() {
    const {isLiked} = this.state
    const {videosDetails} = this.props
    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isdark, saveVideo, savedVideosList} = value
          const isSaved = savedVideosList.some(
            item => item.id === videosDetails.id,
          )
          console.log(savedVideosList)
          const pushVideo = () => {
            saveVideo(videosDetails)
          }
          return (
            <>
              <div className="video-player">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={videosDetails.videoUrl}
                />
              </div>
              <div className="video-info-container">
                <VideoItemTitle isdark={isdark}>
                  {videosDetails.title}
                </VideoItemTitle>
                <div className="video-info-views-likes">
                  <div className="video-info-views">
                    <VideoItemLightText>
                      {videosDetails.viewCount} views
                    </VideoItemLightText>
                    <VideoItemLightText>
                      &bull;{' '}
                      {formatDistanceToNow(
                        new Date(Date.parse(videosDetails.publishedAt)),
                      )}
                    </VideoItemLightText>
                  </div>
                  <div className="video-info-likes">
                    {(isLiked === null || isLiked === false) && (
                      <VideoItemButton onClick={this.onLike} isdark={isdark}>
                        <BiLike /> Like
                      </VideoItemButton>
                    )}
                    {isLiked && (
                      <SavedVideoItemButton
                        onClick={this.onLike}
                        isdark={isdark}
                      >
                        <BiLike /> Like
                      </SavedVideoItemButton>
                    )}
                    {(isLiked === null || isLiked === true) && (
                      <VideoItemButton onClick={this.onDisLike} isdark={isdark}>
                        <BiDislike /> Dislike
                      </VideoItemButton>
                    )}
                    {isLiked === false && (
                      <SavedVideoItemButton
                        onClick={this.onDisLike}
                        isdark={isdark}
                      >
                        <BiDislike /> Dislike
                      </SavedVideoItemButton>
                    )}

                    {isSaved && (
                      <SavedVideoItemButton
                        isSaved
                        onClick={pushVideo}
                        isdark={isdark}
                      >
                        <CgPlayListCheck /> Saved
                      </SavedVideoItemButton>
                    )}

                    {!isSaved && (
                      <VideoItemButton onClick={pushVideo} isdark={isdark}>
                        <CgPlayListAdd /> Save
                      </VideoItemButton>
                    )}
                  </div>
                </div>
                <HorizontalLine isdark={isdark} />
                <div className="channel-subscribers-description">
                  <img
                    src={videosDetails.channel.profile_image_url}
                    alt="channel logo"
                  />
                  <div className="channel-info">
                    <VideoItemTitle isdark={isdark}>
                      {videosDetails.channel.name}
                    </VideoItemTitle>
                    <VideoItemLightText isdark={isdark}>
                      {videosDetails.channel.subscriber_count} subscribers
                    </VideoItemLightText>
                    <p
                      className={`channel-description-lg ${
                        isdark ? 'light-paragraph' : 'dark-paragraph'
                      }`}
                    >
                      {videosDetails.description}
                    </p>
                  </div>
                </div>
                <p
                  className={`channel-description-sm ${
                    isdark ? 'light-paragraph' : 'dark-paragraph'
                  }`}
                >
                  {videosDetails.description}
                </p>
              </div>
            </>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}

export default RenderVideo
