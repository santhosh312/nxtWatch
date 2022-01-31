import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FaMoon} from 'react-icons/fa'
import {FiMenu, FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'
import LogoutPopup from '../LogoutPopup'

import {LogoutButton} from '../../styledComponents'
import './index.css'
import MenuPopup from '../MenuPopup'

class Header extends Component {
  render() {
    const {activeTab} = this.props
    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isdark, changeTheme} = value
          return (
            <div
              className={`header-container ${isdark ? 'dark-bg' : 'light-bg'}`}
            >
              {!isdark && (
                <Link to="/">
                  <img
                    className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              )}
              {isdark && (
                <Link to="/">
                  <img
                    className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              )}
              <ul className="header-menu-lg">
                {!isdark && (
                  <li>
                    <button
                      data-testid="theme"
                      onClick={changeTheme}
                      type="button"
                      className="transparent"
                    >
                      <FaMoon className="icon" />
                    </button>
                  </li>
                )}

                {isdark && (
                  <li>
                    <button
                      data-testid="theme"
                      onClick={changeTheme}
                      type="button"
                      className="transparent"
                    >
                      <HiOutlineLightBulb className="icon light-color" />
                    </button>
                  </li>
                )}
                <li>
                  <Popup
                    modal
                    closeOnDocumentClick={false}
                    trigger={
                      <button type="button" className="transparent">
                        <FiMenu
                          className={`icon ${isdark ? 'light-color' : ''}`}
                        />
                      </button>
                    }
                  >
                    {close => (
                      <MenuPopup closeMenu={close} activeTab={activeTab} />
                    )}
                  </Popup>
                </li>
                <li>
                  <Popup
                    closeOnDocumentClick={false}
                    modal
                    trigger={
                      <button type="button" className="transparent">
                        <FiLogOut
                          className={`icon ${isdark ? 'light-color' : ''}`}
                        />
                      </button>
                    }
                  >
                    {close => (
                      <LogoutPopup
                        redirectToLogin={this.redirectToLogin}
                        closeModal={close}
                        isdark={isdark}
                      />
                    )}
                  </Popup>
                </li>
              </ul>
              <ul className="header-menu-sm">
                {!isdark && (
                  <li>
                    <button
                      data-testid="theme"
                      onClick={changeTheme}
                      type="button"
                      className="transparent"
                    >
                      <FaMoon className="icon" />
                    </button>
                  </li>
                )}
                {isdark && (
                  <li>
                    <button
                      data-testid="theme"
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
                    <LogoutButton isdark={isdark} type="button">
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => <LogoutPopup closeModal={close} isdark={isdark} />}
                </Popup>
              </ul>
            </div>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}

export default Header
