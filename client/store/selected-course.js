import axios from 'axios'
import { clubbUrl } from '../urls'

const GET_SELECTED_COURSE_FROM_API = 'GET_SELECTED_COURSE_FROM_API'

const getSelectedCourseFromApi = course => ({
  type: GET_SELECTED_COURSE_FROM_API,
  course,
})

export const getSelectedCourseFromApiThunkerator = (clubbCourseId) => 
  async dispatch => {
    try {
      console.log('id', clubbUrl)
      const course = await axios.get(`${clubbUrl}/api/courses/${clubbCourseId}?include=club,some,thing`)
      console.log('course', course)
      dispatch(getSelectedCourseFromApi(course.data))
    }
    catch (err) {
      console.error(err)
    }
  }

export default (prevState = {}, action) => {
  switch (action.type) {
    case GET_SELECTED_COURSE_FROM_API:
      return action.course
    default:
      return prevState
  }
}