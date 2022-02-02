import {Component} from 'react'

import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import {TrendingSearchVideosContainer} from '../../styledComponents'

import Header from '../Header'
import SideNavbar from '../SideNavbar'

import FailComponent from '../FailComponent'

import './index.css'

class NotFound extends Component {
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
            <div className="home-container">
              <Header activeTab="SAVED" />
              <div className="home-content-container">
                <SideNavbar />
                <div className="banner-content-container">
                  <TrendingSearchVideosContainer isdark={isdark}>
                    <FailComponent
                      failType={`notFound${isdark ? 'Dark' : 'Light'}`}
                    />
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

export default NotFound
