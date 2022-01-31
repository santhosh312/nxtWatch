import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {LogoutPopupBox, FailDescription, Button} from '../../styledComponents'

import './index.css'

function LogoutPopup(props) {
  const {isdark, closeModal} = props

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <LogoutPopupBox isdark={isdark}>
      <FailDescription isdark={isdark}>
        Are you sure, you want to logout?
      </FailDescription>
      <div className="logout-buttons">
        <Button
          onClick={closeModal}
          bgColor="transparent"
          color="#94a3b8"
          borderColor="#94a3b8"
        >
          Cancel
        </Button>
        <Button
          onClick={handleLogout}
          bgColor="#3b82f6"
          borderColor="#3b82f6"
          color="#ffffff"
        >
          Confirm
        </Button>
      </div>
    </LogoutPopupBox>
  )
}

export default withRouter(LogoutPopup)
