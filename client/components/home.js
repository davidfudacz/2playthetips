import React from 'react'
import { connect } from 'react-redux'
import { AllCoursesRankedByRating } from '../components'

const mainPanelStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: '2.5',
  height: '800px',
  paddingTop: '20px',
  paddingRight: '10px',
}

/**
 * COMPONENT
 */
export const Home = () => {

  return (
    <div className="mainPanel" style={ mainPanelStyle }>
      <AllCoursesRankedByRating />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = ({user}) => ({
    email: user.email,
  })

export default connect(mapState)(Home)
