import {differenceInYears} from 'date-fns'
import {VideoTitle, ChannelName} from '../../styledComponents'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'
import './index.css'

function VideoItemCard(props) {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount, channel, publishedAt} = details
  const dateDiff = differenceInYears(new Date(), new Date(publishedAt))

  return (
    <nxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <li className="video-card-container">
            <img src={thumbnailUrl} alt="channel" />
            <div className="video-info">
              <div className="video-card-left">
                <img
                  className="channel-icon"
                  src={channel.profile_image_url}
                  alt="profile"
                />
              </div>
              <div className="video-card-right">
                <VideoTitle isDark={isDark} className="video-title">
                  {title}
                </VideoTitle>
                <div className="channel-date-views">
                  <div className="channel">
                    <ChannelName>{channel.name}</ChannelName>
                  </div>
                  <div className="date-views">
                    <ChannelName>{viewCount} views</ChannelName>
                    <ChannelName>&bull; {dateDiff} years ago</ChannelName>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}

export default VideoItemCard
