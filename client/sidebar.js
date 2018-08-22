import React from 'react' 
import { connect } from 'react-redux'
import { CourseRatingsMain } from './components'

const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '800px',
}

const Sidebar = () => (
  <div className="sidebar" style={ sidebarStyle }>
    <CourseRatingsMain />
  </div>
)

const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(Sidebar)
