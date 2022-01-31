import {Component} from 'react'

import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import {VideoDetailsContainer} from '../../styledComponents'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import MyLoader from '../Loader'
import FailComponent from '../FailComponent'
import RenderVideo from '../RenderVideo'

import './index.css'

const videoListStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    fetchStatus: videoListStatus.initial,
    videosDetails: {},
  }

  componentDidMount() {
    this.homeRouteData()
  }

  onRetry = () => {
    this.homeRouteData()
  }

  homeRouteData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({fetchStatus: videoListStatus.loading})
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const dataObject = data.video_details
      console.log(dataObject)
      const updatedData = {
        id,
        title: dataObject.title,
        channel: dataObject.channel,
        description: dataObject.description,
        videoUrl: dataObject.video_url,
        thumbnailUrl: dataObject.thumbnail_url,
        viewCount: dataObject.view_count,
        publishedAt: dataObject.published_at,
      }

      console.log(updatedData.publishedAt)
      this.setState({
        fetchStatus: videoListStatus.success,
        videosDetails: updatedData,
      })
    } else {
      this.setState({fetchStatus: videoListStatus.failure})
    }
  }

  render() {
    const {fetchStatus, videosDetails} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      const {history} = this.props
      history.replace('/login')
    }

    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isdark} = value

          return (
            <div className="home-container">
              <Header />
              <div className="home-content-container">
                <SideNavbar />
                <div className="banner-content-container">
                  <VideoDetailsContainer
                    data-testid="videoItemDetails"
                    isdark={isdark}
                  >
                    {fetchStatus === videoListStatus.success && (
                      <RenderVideo videosDetails={videosDetails} controls />
                    )}
                    {fetchStatus === videoListStatus.loading && <MyLoader />}
                    {fetchStatus === videoListStatus.failure && (
                      <FailComponent
                        failRetry={this.onRetry}
                        failType={`fail${isdark ? 'Dark' : 'Light'}`}
                      />
                    )}
                  </VideoDetailsContainer>
                </div>
              </div>
            </div>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
