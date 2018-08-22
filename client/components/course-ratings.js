import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { _parseCourseNameForDisplay } from '../utilities'

/**
 * COMPONENT
 */
const CourseRatings = props => {
  const { courseRatings } = props

  return (
    <div>
      {
        courseRatings.map(courseRating => <p key={courseRating.id}>{_parseCourseNameForDisplay(courseRating.course)} - {courseRating.total}</p>)
      }
    </div>
  )
}


const mapState = ({ courseRatings }) => ({ courseRatings })

export default connect(mapState)(CourseRatings)

/**
 * PROP TYPES
 */
CourseRatings.propTypes = {
  courseRatings: PropTypes.array
}
