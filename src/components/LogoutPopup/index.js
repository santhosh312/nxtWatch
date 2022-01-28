import React from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {LogoutPopupBox, FailDescription, Button} from '../../styledComponents'

import './index.css'

function LogoutPopup(props) {
  const {isDark, closeModal} = props

  const sessionLogout = () => {
    Cookies.remove('jwt_token')
    return <Redirect to="/login" />
  }

  return (
    <LogoutPopupBox isDark={isDark}>
      <FailDescription isDark={isDark}>
        Are you sure you want to logout?
      </FailDescription>
      <div className="logout-buttons">
        <Button
          onClick={closeModal}
          bgColor="transparent"
          color="#94a3b8"
          borderColor="#94a3b8"
        >
          Close
        </Button>
        <Button
          onClick={sessionLogout}
          bgColor="#3b82f6"
          borderColor="#3b82f6"
          color="#ffffff"
        >
          Logout
        </Button>
      </div>
    </LogoutPopupBox>
  )
}

export default LogoutPopup
