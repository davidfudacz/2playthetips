import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { _parseCourseNameForDisplay, _parseCourseUrl, _sortRatingsByTotal } from '../../utilities'

import { defaultBorder } from '../../styles'

const style = {
  ...defaultBorder,
  padding: '10px',
}

const MainRating = ({ courseRating, rank }) => (
  <div>
    <Link to={_parseCourseUrl(courseRating.course)}>
      {rank} - {_parseCourseNameForDisplay(courseRating.course)} - {courseRating.total}
    </Link>
  </div>
)

/**
 * COMPONENT
 */
const CourseRatings = ({ courseRatings }) => (
  <div style={ style }>
    {
      _sortRatingsByTotal(courseRatings).map((courseRating, index) => <MainRating key={courseRating.id} courseRating={courseRating} rank={index + 1} />)
    }
  </div>
)


const mapState = ({ courseRatings }) => ({ courseRatings })

export default connect(mapState)(CourseRatings)

/**
 * PROP TYPES
 */
CourseRatings.propTypes = {
  courseRatings: PropTypes.array
}

MainRating.propTypes = {
  rank: PropTypes.number.isRequired,
  courseRating: PropTypes.object.isRequired
}