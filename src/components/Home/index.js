import {Component} from 'react'

import Cookies from 'js-cookie'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import {
  Banner,
  Logo,
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

export default class Home extends Component {
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

      console.log(updatedData)
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

    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isDark, showBanner, closeBanner} = value

          return (
            <div className="home-container">
              <Header />
              <div className="home-content-container">
                <SideNavbar activeTab="TRENDING" />
                <div className="banner-content-container">
                  {showBanner && (
                    <Banner>
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
                  <SearchVideosContainer isDark={isDark}>
                    <SearchContainer isDark={isDark}>
                      <input
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        placeholder="Search"
                        className={`search-bar ${isDark && 'light-color'}`}
                        type="search"
                      />
                      <SearchButton
                        onClick={this.onClickSearchButton}
                        isDark={isDark}
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
                      <FailComponent failType="search" />
                    )}
                    {fetchStatus === videoListStatus.failure && (
                      <FailComponent
                        failType={`fail${isDark ? 'Dark' : 'Light'}`}
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
