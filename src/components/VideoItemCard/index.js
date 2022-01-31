import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {VideoTitle, ChannelName} from '../../styledComponents'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'
import './index.css'

function VideoItemCard(props) {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount, channel, publishedAt} = details
  const dateDiff = formatDistanceToNow(new Date(Date.parse(publishedAt)))

  return (
    <nxtWatchContext.Consumer>
      {value => {
        const {isdark} = value
        return (
          <Link
            style={{textDecoration: 'none'}}
            to={`/videos/${id}`}
            className="video-card-container"
          >
            <img src={thumbnailUrl} alt="video thumbnail" />
            <div className="video-info">
              <div className="video-card-left">
                <img
                  className="channel-icon"
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
              </div>
              <div className="video-card-right">
                <VideoTitle isdark={isdark} className="video-title">
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
          </Link>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}

export default VideoItemCard
