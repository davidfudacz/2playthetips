import axios from 'axios'
import { clubbUrl } from '../urls'

const GET_CURRENT_COURSE_FROM_API = 'GET_CURRENT_COURSE_FROM_API'

const getCurrentCourseFromApi = course => ({
  type: GET_CURRENT_COURSE_FROM_API,
  course,
})

export const getCurrentCourseFromApiThunkerator = (clubbCourseId) => 
  async dispatch => {
    try {
      console.log('id', clubbUrl)
      const course = await axios.get(`${clubbUrl}/api/courses/${clubbCourseId}?include=club`)
      console.log('course', course)
      dispatch(getCurrentCourseFromApi(course.data))
    }
    catch (err) {
      console.error(err)
    }
  }

export default (prevState = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_COURSE_FROM_API:
      return action.course
    default:
      return prevState
  }
}