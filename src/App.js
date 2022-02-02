import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import nxtWatchContext from './components/context/nxtVideoContext/nxtVideo'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

import './App.css'
import NotFound from './components/NotFound'

// Replace your code here
export default class App extends Component {
  state = {isdark: false, showBanner: true, savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({isdark: !prevState.isdark}))
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  saveVideo = obj => {
    const {savedVideosList} = this.state
    const isVideoSaved = savedVideosList.some(item => item.id === obj.id)
    if (isVideoSaved) {
      const updatedVideoList = savedVideosList.filter(
        item => item.id !== obj.id,
      )
      this.setState({savedVideosList: updatedVideoList})
    } else {
      this.setState({savedVideosList: [...savedVideosList, obj]})
    }
  }

  render() {
    const {isdark, showBanner, savedVideosList} = this.state
    return (
      <>
        <nxtWatchContext.Provider
          value={{
            isdark,
            showBanner,
            closeBanner: this.closeBanner,
            changeTheme: this.changeTheme,
            saveVideo: this.saveVideo,
            savedVideosList,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/gaming" component={Gaming} />
            <Route exact path="/videos/:id" component={VideoItemDetails} />
            <Route exact path="/saved-videos" component={SavedVideos} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </nxtWatchContext.Provider>
      </>
    )
  }
}
