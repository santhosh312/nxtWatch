import {HiFire} from 'react-icons/hi'
import {FailHeading, RouteBannerContainer} from '../../styledComponents'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import './index.css'

function RouteBanner(props) {
  const {RouteIcon, routeHeading} = props
  return (
    <nxtWatchContext.Consumer>
      {value => {
        const {isdark} = value
        return (
          <RouteBannerContainer
            data-testid="banner"
            isdark={isdark}
            className="route-banner-container"
          >
            <div
              className={`route-icon-container ${isdark ? 'dark-icon-bg' : ''}`}
            >
              <RouteIcon isdark={isdark} className="category-icon" />
            </div>
            <FailHeading isdark={isdark}>{routeHeading}</FailHeading>
          </RouteBannerContainer>
        )
      }}
    </nxtWatchContext.Consumer>
  )
}

export default RouteBanner
