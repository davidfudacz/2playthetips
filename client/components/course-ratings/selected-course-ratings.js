import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { defaultBorder } from '../../styles'

const style = {
  ...defaultBorder,
  padding: '10px',
}

/**
 * COMPONENT
 */
const SelectedCourseRatings = ({ courseRatings, selectedCourse }) => {
  if (!courseRatings.length) return null
  const selectedCourseRatings = courseRatings.find(ratings => ratings.clubbCourseId === selectedCourse.id)
  return (
    <div style={ style }>
      <div>Shot Playability: {selectedCourseRatings.shot}</div>
      <div>Short Game Playability: {selectedCourseRatings.short}</div>
      <div>Fairness: {selectedCourseRatings.fairness}</div>
      <div>Experience: {selectedCourseRatings.experience}</div>
      <div>Aura: {selectedCourseRatings.aura}</div>
      <div>OMG Factor: {selectedCourseRatings.omg}</div>
      <div>Design: {selectedCourseRatings.design}</div>
      <div>Total: {selectedCourseRatings.total}</div>
      <div>Ass-Kick Factor: {selectedCourseRatings.assKick}</div>
    </div>
  )
}


const mapState = ({ courseRatings, selectedCourse }) => ({ courseRatings, selectedCourse })

export default connect(mapState)(SelectedCourseRatings)

/**
 * PROP TYPES
 */
SelectedCourseRatings.propTypes = {
  courseRatings: PropTypes.array.isRequired,
  selectedCourse: PropTypes.object.isRequired,
}