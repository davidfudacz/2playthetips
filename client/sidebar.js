import React from 'react' 
import { connect } from 'react-redux'
import { CourseRatings } from './components'

const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  height: '800px',
  paddingTop: '20px',
  paddingLeft: '10px',
}

const Sidebar = () => (
  <div className="sidebar" style={ sidebarStyle }>
    <CourseRatings />
  </div>
)

const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(Sidebar)
