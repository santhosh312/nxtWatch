import React from 'react'
import {SideFooterText} from '../../styledComponents'

import './index.css'

export default function SideNavFooter(props) {
  const {isDark} = props
  return (
    <div className="sidenav-footer-container">
      <SideFooterText isDark={isDark}>CONTACT US</SideFooterText>
      <div className="social-buttons-container">
        <img
          className="social-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <img
          className="social-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <img
          className="social-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </div>
      <SideFooterText isDark={isDark}>
        Enjoy! Now to see your channels and recommendations!
      </SideFooterText>
    </div>
  )
}
