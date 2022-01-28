import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import nxtWatchContext from './components/context/nxtVideoContext/nxtVideo'

import Login from './components/Login'
import Home from './components/Home'

import './App.css'

// Replace your code here
export default class App extends Component {
  state = {isDark: false, showBanner: true}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {isDark, showBanner} = this.state
    return (
      <>
        <nxtWatchContext.Provider
          value={{
            isDark,
            showBanner,
            closeBanner: this.closeBanner,
            changeTheme: this.changeTheme,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </nxtWatchContext.Provider>
      </>
    )
  }
}
