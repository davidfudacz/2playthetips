import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {email, courses} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      {
        courses.map(course => <p key={course.id}>{course.club.name}</p>)
      }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = ({user, courses}) => ({
    email: user.email,
    courses,
  })

export default connect(mapState)(Home)

/**
 * PROP TYPES
 */
Home.propTypes = {
  email: PropTypes.string
}
