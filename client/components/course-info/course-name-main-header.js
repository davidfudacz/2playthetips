import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CourseNameMainHeaderBuildInfo from './course-name-main-header-build-info'

import { defaultBorder, primaryColor } from '../../styles'
import { _parseCourseNameForDisplay } from '../../utilities';

const style = {
  ...defaultBorder,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'center',
}

const headerStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
}

const headerSubtextStyle = {
  color: primaryColor,
  fontFamily: 'verdana',
  fontSize: '.8rem',
}

/**
 * COMPONENT
 */
const CourseNameMainHeader = ({ selectedCourse, selectedCourseBuilds }) => {
  if (!selectedCourse.id) return null
  return (
    <div style={ style }>
      <div className="courseNameHeaderWrapper" >
        <div className="courseNameHeader" style={ headerStyle }>
          {_parseCourseNameForDisplay(selectedCourse)}
        </div>
        <div className="courseNameHeaderSubtext" style={ headerSubtextStyle }>
          Chicago, IL (USA) - Private
        </div> 
      </div>
        <CourseNameMainHeaderBuildInfo builds={selectedCourseBuilds} />
    </div>
  )
}


const mapState = ({ selectedCourse, selectedCourseBuilds }) => ({ selectedCourse, selectedCourseBuilds })

export default connect(mapState)(CourseNameMainHeader)

/**
 * PROP TYPES
 */
CourseNameMainHeader.propTypes = {
  selectedCourse: PropTypes.object.isRequired,
}