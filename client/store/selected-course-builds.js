import axios from 'axios'
import { clubbUrl } from '../urls'

const GET_SELECTED_COURSE_BUILDS_FROM_API = 'GET_SELECTED_COURSE_BUILDS_FROM_API'

const getSelectedCourseBuildsFromApi = courseBuilds => ({
  type: GET_SELECTED_COURSE_BUILDS_FROM_API,
  courseBuilds,
})

export const getSelectedCourseBuildsFromApiThunkerator = (clubbCourseId) => 
  async dispatch => {
    try {
      const courseBuilds = await axios.get(`${clubbUrl}/api/courses/${clubbCourseId}/builds`)
      dispatch(getSelectedCourseBuildsFromApi(courseBuilds.data))
    }
    catch (err) {
      console.error(err)
    }
  }

export default (prevState = [], action) => {
  switch (action.type) {
    case GET_SELECTED_COURSE_BUILDS_FROM_API:
      return action.courseBuilds
    default:
      return prevState
  }
}