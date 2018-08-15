import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CourseRatings } from '../components'

/**
 * COMPONENT
 */
export const Home = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <CourseRatings />
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
