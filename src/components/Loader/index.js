import React from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

function MyLoader() {
  return (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#00bfff" width={50} height={50} />
    </div>
  )
}

export default MyLoader
