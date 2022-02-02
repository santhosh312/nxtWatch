import {Component} from 'react'

import Cookies from 'js-cookie'
import {CgPlayListAdd} from 'react-icons/cg'

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

class SavedVideos extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      const {history} = this.props
      history.replace('/login')
    }
    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isdark, savedVideosList} = value

          return (
            <div className="home-container" data-testid="savedVideos">
              <Header activeTab="SAVED" />
              <div className="home-content-container">
                <SideNavbar activeTab="SAVED" />
                <div className="banner-content-container">
                  <RouteBanner
                    RouteIcon={CgPlayListAdd}
                    routeHeading="Saved Videos"
                  />
                  <TrendingSearchVideosContainer isdark={isdark}>
                    <ul className="videos-container">
                      {savedVideosList.length !== 0 && (
                        <>
                          {savedVideosList.map(item => (
                            <RouteVideoCard key={item.id} details={item} />
                          ))}
                        </>
                      )}
                    </ul>
                    {/* <ul className="videos-container-small">
                      {savedVideosList.length !== 0 && (
                        <>
                          {savedVideosList.map(item => (
                            <VideoItemCard key={item.id} details={item} />
                          ))}
                        </>
                      )}
                    </ul> */}
                    {savedVideosList.length === 0 && (
                      <FailComponent
                        failRetry={this.onRetry}
                        failType="noSavedVideos"
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

export default SavedVideos
