import React from 'react'
import { connect } from 'react-redux'
import { CourseNameMainHeader, ReviewMain } from '../components'

const mainColumnStyle = {
  flex: '2.5',
  paddingTop: '20px',
  paddingRight: '10px',
}

/**
 * COMPONENT
 */
export const Home = () => {

  return (
    <div className="mainColumn" style={ mainColumnStyle }>
      <CourseNameMainHeader />
      <ReviewMain />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = ({user}) => ({
    email: user.email,
  })

export default connect(mapState)(Home)
