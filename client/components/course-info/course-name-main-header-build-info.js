import React from 'react'
import PropTypes from 'prop-types'

import { primaryColor } from '../../styles'
import { _parseBuildWordingForDisplay, _sortBuildsByYear } from '../../utilities'

const courseInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  color: primaryColor,
  fontFamily: 'verdana',
  fontSize: '.8rem',
}

const CourseNameMainHeaderBuildInfo = ({ builds }) => (
  <div className="courseInfo" style={ courseInfoStyle }>
    {
      _sortBuildsByYear(builds).map(build => <div style={{ marginBottom: '2px' }} key={build.id}>{_parseBuildWordingForDisplay(build, true)}</div>)
    }
  </div>
)

export default CourseNameMainHeaderBuildInfo

CourseNameMainHeaderBuildInfo.propTypes = {
  builds: PropTypes.array.isRequired
}