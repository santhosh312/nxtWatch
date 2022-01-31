import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import {RouteVideoTitle, RouteChannelName} from '../../styledComponents'
import './index.css'

function RouteVideoCard(props) {
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
            className="route-card-container"
          >
            <div className="route-thumbnail">
              <img src={thumbnailUrl} alt="video thumbnail" />
            </div>
            <div className="info-container">
              <RouteVideoTitle isdark={isdark}>{title}</RouteVideoTitle>
              <div className="views-channel-date">
                <RouteChannelName>{channel.name}</RouteChannelName>
                <div className="views-date">
                  <RouteChannelName>{viewCount} views</RouteChannelName>
                  <RouteChannelName>
                    &bull; {dateDiff} years ago
                  </RouteChannelName>
                </div>
              </div>
            </div>
          </Link>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}

export default RouteVideoCard
