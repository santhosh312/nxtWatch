import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import {TrendingSearchVideosContainer} from '../../styledComponents'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import MyLoader from '../Loader'
import FailComponent from '../FailComponent'
import RouteBanner from '../RouteBanner'
import GameCard from '../GameCard'

import './index.css'

const videoListStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
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
    const url = `https://apis.ccbp.in/videos/gaming`
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
        id: item.id,
        title: item.title,
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
            <div className="home-container" data-testid="gaming">
              <Header activeTab="GAMING" />
              <div className="home-content-container">
                <SideNavbar activeTab="GAMING" />
                <div className="banner-content-container">
                  <RouteBanner
                    RouteIcon={SiYoutubegaming}
                    routeHeading="Gaming"
                  />
                  <TrendingSearchVideosContainer isdark={isdark}>
                    <ul className="videos-container">
                      {fetchStatus === videoListStatus.success &&
                        videosList.length !== 0 && (
                          <>
                            {videosList.map(item => (
                              <GameCard key={item.id} details={item} />
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

export default Gaming
