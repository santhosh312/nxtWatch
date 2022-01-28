import React from 'react'

const nxtWatchContext = React.createContext({
  isDark: false,
  showBanner: true,
  changeTheme: () => {},
})

export default nxtWatchContext
