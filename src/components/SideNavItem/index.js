import {Component} from 'react'
import {NavItemDark, NavItemLight, NavItemText} from '../../styledComponents'

import nxtWatchContext from '../context/nxtVideoContext/nxtVideo'

import './index.css'

export default class SideNavItem extends Component {
  render() {
    const {Icon, displayText, isActive} = this.props
    return (
      <nxtWatchContext.Consumer>
        {value => {
          const {isdark} = value
          return (
            <>
              {!isdark && (
                <NavItemLight isActive={isActive}>
                  <Icon className={`icon ${isActive && 'active-icon'}`} />
                  <NavItemText isActive={isActive}>{displayText}</NavItemText>
                </NavItemLight>
              )}
              {isdark && (
                <NavItemDark isActive={isActive}>
                  <Icon className={`icon ${isActive && 'active-icon'}`} />
                  <NavItemText isActive={isActive}>{displayText}</NavItemText>
                </NavItemDark>
              )}
            </>
          )
        }}
      </nxtWatchContext.Consumer>
    )
  }
}
