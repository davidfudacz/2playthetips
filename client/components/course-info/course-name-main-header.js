import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { defaultBorder } from '../../styles'
import { _parseCourseNameForDisplay } from '../../utilities';

const style = {
  ...defaultBorder,
  padding: '10px',
}

/**
 * COMPONENT
 */
const CourseNameMainHeader = ({ selectedCourse }) => {
  if (!selectedCourse.id) return null
  return (
    <div style={ style }>
      This is the header for {_parseCourseNameForDisplay(selectedCourse)}
    </div>
  )
}


const mapState = ({ selectedCourse }) => ({ selectedCourse })

export default connect(mapState)(CourseNameMainHeader)

/**
 * PROP TYPES
 */
CourseNameMainHeader.propTypes = {
  selectedCourse: PropTypes.object.isRequired,
}