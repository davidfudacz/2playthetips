import axios from 'axios'
import { clubbUrl } from '../urls'

const GET_COURSE_FROM_API = 'GET_COURSE_FROM_API'

const getCourseFromApi = course => ({
  type: GET_COURSE_FROM_API,
  course,
})

export const getCourseFromApiThunkerator = (clubbCourseId) => 
  async dispatch => {
    try {
      const course = await axios.get(`${clubbUrl}/api/course/${clubbCourseId}`)
      console.log(course)
      dispatch(getCourseFromApi(course.data))
    }
    catch (err) {
      console.error(err)
    }
  }

export default (prevState = {}, action) => {
  switch (action.type) {
    case GET_COURSE_FROM_API:
      return action.course
    default:
      return prevState
  }
}