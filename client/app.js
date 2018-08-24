import React from 'react'

import { Navbar, Sidebar } from './components'
import Routes from './routes'

const contentWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '80vw',
  alignItems: 'center',
}

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="contentWrapper" style={ contentWrapperStyle } >
        <Routes />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
