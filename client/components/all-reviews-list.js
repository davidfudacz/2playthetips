/* eslint react/no-danger: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { defaultBorder, primaryColor } from '../styles'
import { _parseDatePosted, _parseCourseNameForDisplay } from '../utilities'

const style = {
  ...defaultBorder,
  // display: 'flex',
  // flexDirection: 'row',
  // justifyContent: 'space-between',
  // flexWrap: 'wrap',
  // alignItems: 'center',
}

const titleStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '15px',
}

const dateStampStyle = {
  fontSize: '.8rem',
  fontStyle: 'italic',
  color: primaryColor,
  marginBottom: '15px',
}

const ReviewListItem = ({ review }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
    <div style={{ maxHeight: '300px', overflow: 'hidden', marginBottom: '15px', borderBottom: `1px solid ${primaryColor}`, flex: '1.5' }}>
      <div style={ dateStampStyle }>2 Play the Tips posted this review on {_parseDatePosted(review.datePosted)}</div>
      <h2>{ _parseCourseNameForDisplay(review.course) }</h2>
      <h3>{ review.title }</h3>
      <div className="reviewContent" dangerouslySetInnerHTML={{ __html: review.content }} />
    </div>
      <img style={{ width: '50%', objectFit: 'contain' }} src={ review.imgUrl } />
  </div>
)

const AllReviewsList = ({ reviews }) => {
  return !!reviews.length && (
    <div style={ style }>
      {
        reviews.map(review => <ReviewListItem key={ review.id } review={ review } /> )
      }
    </div>
  )
}


const mapState = ({ reviews }) => ({ reviews })

export default connect(mapState)(AllReviewsList)

/**
 * PROP TYPES
 */
AllReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
}