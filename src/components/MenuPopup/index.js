import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {MdClose} from 'react-icons/md'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import SideNavItem from '../SideNavItem'
import SideNavFooter from '../SideNavFooter'
import {MenuNavContainer, MenuCloseBtn} from '../../styledComponents'

import './index.css'

const navItemsList = [
  {id: 'HOME', displayText: 'Home', icon: AiFillHome, path: '/'},
  {id: 'TRENDING', displayText: 'Trending', icon: HiFire, path: '/trending'},
  {id: 'GAMING', displayText: 'Gaming', icon: SiYoutubegaming, path: '/gaming'},
  {
    id: 'SAVED',
    displayText: 'Saved videos',
    icon: CgPlayListAdd,
    path: '/saved-videos',
  },
]

export default class MenuPopup extends Component {
  render() {
    const {activeTab, closeMenu} = this.props

    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isdark} = value
          return (
            <MenuNavContainer isdark={isdark}>
              <MenuCloseBtn isdark={isdark} onClick={closeMenu}>
                <MdClose />
              </MenuCloseBtn>
              <ul className="menuItemsList">
                {navItemsList.map(item => (
                  <Link
                    key={item.id}
                    style={{textDecoration: 'none'}}
                    to={item.path}
                  >
                    <SideNavItem
                      key={item.id}
                      Icon={item.icon}
                      displayText={item.displayText}
                      isActive={activeTab === item.id}
                    />
                  </Link>
                ))}
              </ul>
            </MenuNavContainer>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}
