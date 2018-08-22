import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CourseRatingsMain } from '../components'
import { defaultBorder } from '../styles'

const mainPanelStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: '4',
  height: '800px',
}

/**
 * COMPONENT
 */
export const Home = () => {

  return (
    <div style={ mainPanelStyle }>
      <CourseRatingsMain />
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

/**
 * PROP TYPES
 */
Home.propTypes = {
  email: PropTypes.string,
}
