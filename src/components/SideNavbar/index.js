import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import SideNavItem from '../SideNavItem'
import SideNavFooter from '../SideNavFooter'
import {SideNavContainer} from '../../styledComponents'

import './index.css'

const navItemsList = [
  {id: 'HOME', displayText: 'Home', icon: AiFillHome},
  {id: 'TRENDING', displayText: 'Trending', icon: HiFire},
  {id: 'GAMING', displayText: 'Gaming', icon: SiYoutubegaming},
  {id: 'SAVED', displayText: 'Saved Videos', icon: CgPlayListAdd},
]

export default class SideNavbar extends Component {
  render() {
    const {activeTab} = this.props

    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SideNavContainer isDark={isDark}>
              <ul className="navItemsList">
                {navItemsList.map(item => (
                  <SideNavItem
                    key={item.id}
                    Icon={item.icon}
                    displayText={item.displayText}
                    isActive={activeTab === item.id}
                  />
                ))}
              </ul>
              <SideNavFooter isDark={isDark} />
            </SideNavContainer>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}
