import {Component} from 'react'
import Cookies from 'js-cookie'
import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'
import {
  BlueButton,
  Logo,
  Label,
  LoginBox,
  CboxLabel,
  ErrorMsg,
} from '../../styledComponents'

import './index.css'

export default class Login extends Component {
  state = {errorMsg: '', username: '', password: '', showPassword: false}

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  toggleCheckbox = e => {
    this.setState({showPassword: e.target.checked})
  }

  sendLoginRequest = async () => {
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = JSON.stringify({username, password})

    const options = {
      method: 'POST',
      body: userDetails,
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      Cookies.set('jwt_token', data.jwt_token, {expires: 7})
      const {history} = this.props
      history.replace('/')
    } else {
      const data = await response.json()
      this.setState({errorMsg: data.error_msg})
    }
  }

  onLogin = e => {
    e.preventDefault()
    this.sendLoginRequest()
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const {history} = this.props
      console.log(this.props)
      history.replace('/')
    }
    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isdark} = value
          // console.log(isdark)
          return (
            <div className={`login-container ${isdark ? 'darkBg' : ''}`}>
              <LoginBox onSubmit={this.onLogin} isdark={isdark}>
                {!isdark && (
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
                {isdark && (
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                )}
                <Label htmlFor="username" isdark={isdark}>
                  USERNAME
                </Label>
                <input
                  onChange={this.onChangeUsername}
                  value={username}
                  id="username"
                  placeholder="Username"
                  className="input"
                  type="text"
                />
                <Label htmlFor="password" isdark={isdark}>
                  PASSWORD
                </Label>
                <input
                  onChange={this.onChangePassword}
                  value={password}
                  id="password"
                  placeholder="Password"
                  className="input"
                  type={showPassword ? 'text' : 'password'}
                />
                <div className="show-password">
                  <input
                    onChange={this.toggleCheckbox}
                    id="togglePassword"
                    className="checkbox"
                    type="checkbox"
                  />
                  <CboxLabel isdark={isdark} htmlFor="togglePassword">
                    Show Password
                  </CboxLabel>
                </div>
                <BlueButton>Login</BlueButton>
                {errorMsg !== '' && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginBox>
            </div>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}
