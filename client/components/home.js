import React from 'react'
import { connect } from 'react-redux'
import { AllCoursesRankedByRating, CourseNameMainHeader } from '../components'

const mainColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: '2.5',
  height: '800px',
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
      <AllCoursesRankedByRating />
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
