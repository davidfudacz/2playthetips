import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { _parseCourseNameForDisplay } from '../../utilities'

import { defaultBorder } from '../../styles'

const style = {
  ...defaultBorder,
  padding: '10px',
  margin: '15px',
}

/**
 * COMPONENT
 */
const CourseRatingsMain = ({ courseRatings }) => (
  <div style={ style }>
    {
      courseRatings.map(courseRating => <p key={courseRating.id}>{_parseCourseNameForDisplay(courseRating.course)} - {courseRating.total}</p>)
    }
  </div>
)


const mapState = ({ courseRatings }) => ({ courseRatings })

export default connect(mapState)(CourseRatingsMain)

/**
 * PROP TYPES
 */
CourseRatingsMain.propTypes = {
  courseRatings: PropTypes.array
}
