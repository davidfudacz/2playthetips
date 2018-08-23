import React from 'react'

import { Navbar } from './components'
import Routes from './routes'
import Sidebar from './sidebar'

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '80vw',
  alignItems: 'center',
}

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="mainWrapper" style={ wrapperStyle } >
        <Routes />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
