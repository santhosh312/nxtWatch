import {Component} from 'react'

import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import {TrendingSearchVideosContainer} from '../../styledComponents'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import VideoItemCard from '../VideoItemCard'
import MyLoader from '../Loader'
import FailComponent from '../FailComponent'
import RouteBanner from '../RouteBanner'
import RouteVideoCard from '../RouteVideoCard'

import './index.css'

const videoListStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    fetchStatus: videoListStatus.initial,
    videosList: [],
  }

  componentDidMount() {
    this.homeRouteData()
  }

  onRetry = () => {
    this.homeRouteData()
  }

  homeRouteData = async () => {
    this.setState({fetchStatus: videoListStatus.loading})
    const url = `https://apis.ccbp.in/videos/trending`
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
      const updatedData = data.videos.map(item => ({
        channel: item.channel,
        id: item.id,
        title: item.title,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        viewCount: item.view_count,
      }))

      this.setState({
        fetchStatus: videoListStatus.success,
        videosList: updatedData,
      })
    } else {
      this.setState({fetchStatus: videoListStatus.failure})
    }
  }

  render() {
    const {fetchStatus, videosList} = this.state
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
            <div className="home-container" data-testid="trending">
              <Header activeTab="TRENDING" />
              <div className="home-content-container">
                <SideNavbar activeTab="TRENDING" />
                <div className="banner-content-container">
                  <RouteBanner RouteIcon={HiFire} routeHeading="Trending" />
                  <TrendingSearchVideosContainer isdark={isdark}>
                    <ul className="videos-container">
                      {fetchStatus === videoListStatus.success &&
                        videosList.length !== 0 && (
                          <>
                            {videosList.map(item => (
                              <RouteVideoCard key={item.id} details={item} />
                            ))}
                          </>
                        )}
                    </ul>
                    <ul className="videos-container-small">
                      {fetchStatus === videoListStatus.success &&
                        videosList.length !== 0 && (
                          <>
                            {videosList.map(item => (
                              <VideoItemCard key={item.id} details={item} />
                            ))}
                          </>
                        )}
                    </ul>
                    {fetchStatus === videoListStatus.loading && <MyLoader />}
                    {fetchStatus === videoListStatus.failure && (
                      <FailComponent
                        failRetry={this.onRetry}
                        failType={`fail${isdark ? 'Dark' : 'Light'}`}
                      />
                    )}
                  </TrendingSearchVideosContainer>
                </div>
              </div>
            </div>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}

export default Trending
