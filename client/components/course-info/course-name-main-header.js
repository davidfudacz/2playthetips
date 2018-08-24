import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { defaultBorder, primaryColor } from '../../styles'
import { _parseCourseNameForDisplay } from '../../utilities';

const style = {
  ...defaultBorder,
  padding: '10px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
}

const headerWrapper = {
  display: 'flex',
  flexDirection: 'column',
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

const courseInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  color: primaryColor,
  fontFamily: 'verdana',
  fontSize: '.8rem',
}

/**
 * COMPONENT
 */
const CourseNameMainHeader = ({ selectedCourse }) => {
  if (!selectedCourse.id) return null
  return (
    <div style={ style }>
      <div className="courseNameHeaderWrapper" style={ headerWrapper }>
        <div className="courseNameHeader" style={ headerStyle }>
          {_parseCourseNameForDisplay(selectedCourse)}
        </div>
        <div className="courseNameHeaderSubtext" style={ headerSubtextStyle }>
          Chicago, IL
        </div> 
      </div>
      <div className="courseInfo" style={ courseInfoStyle }>
        <div>Built: {selectedCourse.club.established}</div>
        <div>Donald Ross</div>
        <div>Private</div>
      </div>
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