import {Component} from 'react'

import Cookies from 'js-cookie'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import {
  Banner,
  SideFooterText,
  SearchVideosContainer,
  SearchContainer,
  SearchButton,
} from '../../styledComponents'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import VideoItemCard from '../VideoItemCard'
import MyLoader from '../Loader'
import FailComponent from '../FailComponent'

import './index.css'

const videoListStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    fetchStatus: videoListStatus.initial,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.homeRouteData()
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  onClickSearchButton = () => {
    this.homeRouteData()
  }

  onRetry = () => {
    this.homeRouteData()
  }

  homeRouteData = async () => {
    const {searchInput} = this.state
    this.setState({fetchStatus: videoListStatus.loading})
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
    const {fetchStatus, videosList, searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      const {history} = this.props
      history.replace('/login')
    }

    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isdark, showBanner, closeBanner} = value

          return (
            <div className="home-container" data-testid="home">
              <Header activeTab="HOME" />
              <div className="home-content-container">
                <SideNavbar activeTab="HOME" />
                <div className="banner-content-container">
                  {showBanner && (
                    <Banner data-testid="banner">
                      <button
                        onClick={closeBanner}
                        type="button"
                        data-testid="close"
                        className="close-icon-btn"
                      >
                        <AiOutlineClose className="close-icon" />
                      </button>
                      <img
                        className="banner-logo"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <SideFooterText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </SideFooterText>
                      <button type="button" className="banner-button">
                        GET IT NOW
                      </button>
                    </Banner>
                  )}
                  <SearchVideosContainer isdark={isdark}>
                    <SearchContainer isdark={isdark}>
                      <input
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        placeholder="Search"
                        className={`search-bar ${isdark && 'light-color'}`}
                        type="search"
                      />
                      <SearchButton
                        data-testid="searchButton"
                        onClick={this.onClickSearchButton}
                        isdark={isdark}
                        className="search-button"
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </SearchContainer>
                    <ul className="videos-container">
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
                    {videosList.length === 0 && (
                      <FailComponent
                        failRetry={this.onRetry}
                        failType="search"
                      />
                    )}
                    {fetchStatus === videoListStatus.failure && (
                      <FailComponent
                        failRetry={this.onRetry}
                        failType={`fail${isdark ? 'Dark' : 'Light'}`}
                      />
                    )}
                  </SearchVideosContainer>
                </div>
              </div>
            </div>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}

export default Home
