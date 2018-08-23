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
const CurrentCourseRatings = ({ courseRatings, currentCourse }) => {
  if (!courseRatings.length) return null
  const currentCourseRatings = courseRatings.find(ratings => ratings.clubbCourseId === currentCourse.id)
  return (
    <div style={ style }>
      <div>Shot Playability: {currentCourseRatings.shot}</div>
      <div>Short Game Playability: {currentCourseRatings.short}</div>
      <div>Fairness: {currentCourseRatings.fairness}</div>
      <div>Experience: {currentCourseRatings.experience}</div>
      <div>Aura: {currentCourseRatings.aura}</div>
      <div>OMG Factor: {currentCourseRatings.omg}</div>
      <div>Design: {currentCourseRatings.design}</div>
      <div>Total: {currentCourseRatings.total}</div>
      <div>Ass-Kick Factor: {currentCourseRatings.assKick}</div>
    </div>
  )
}


const mapState = ({ courseRatings, currentCourse }) => ({ courseRatings, currentCourse })

export default connect(mapState)(CurrentCourseRatings)

/**
 * PROP TYPES
 */
CurrentCourseRatings.propTypes = {
  courseRatings: PropTypes.array.isRequired,
  currentCourse: PropTypes.object.isRequired,
}