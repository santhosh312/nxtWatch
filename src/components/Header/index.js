import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FaMoon} from 'react-icons/fa'
import {FiMenu, FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'
import LogoutPopup from '../LogoutPopup'

import {Logo, LogoutButton} from '../../styledComponents'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isDark, changeTheme} = value
          return (
            <div
              className={`header-container ${isDark ? 'dark-bg' : 'light-bg'}`}
            >
              {!isDark && (
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}
              {isDark && (
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              )}
              <ul className="header-menu-lg">
                {!isDark && (
                  <li>
                    <button
                      onClick={changeTheme}
                      type="button"
                      className="transparent"
                    >
                      <FaMoon className="icon" />
                    </button>
                  </li>
                )}

                {isDark && (
                  <li>
                    <button
                      onClick={changeTheme}
                      type="button"
                      className="transparent"
                    >
                      <HiOutlineLightBulb className="icon light-color" />
                    </button>
                  </li>
                )}
                <li>
                  <button type="button" className="transparent">
                    <FiMenu className={`icon ${isDark ? 'light-color' : ''}`} />
                  </button>
                </li>
                <li>
                  <Popup
                    closeOnDocumentClick={false}
                    modal
                    trigger={
                      <button type="button" className="transparent">
                        <FiLogOut
                          className={`icon ${isDark ? 'light-color' : ''}`}
                        />
                      </button>
                    }
                  >
                    {close => (
                      <LogoutPopup closeModal={close} isDark={isDark} />
                    )}
                  </Popup>
                </li>
              </ul>
              <ul className="header-menu-sm">
                {!isDark && (
                  <li>
                    <button
                      onClick={changeTheme}
                      type="button"
                      className="transparent"
                    >
                      <FaMoon className="icon" />
                    </button>
                  </li>
                )}
                {isDark && (
                  <li>
                    <button
                      onClick={changeTheme}
                      type="button"
                      className="transparent"
                    >
                      <HiOutlineLightBulb className="icon light-color" />
                    </button>
                  </li>
                )}
                <img
                  className="profile-image"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  closeOnDocumentClick={false}
                  trigger={
                    <LogoutButton isDark={isDark} type="button">
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => <LogoutPopup closeModal={close} isDark={isDark} />}
                </Popup>
              </ul>
            </div>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
