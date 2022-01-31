import React from 'react'

const nxtWatchContext = React.createContext({
  isdark: false,
  showBanner: true,
  savedVideosList: [],
  saveVideo: () => {},
  changeTheme: () => {},
})

export default nxtWatchContext
