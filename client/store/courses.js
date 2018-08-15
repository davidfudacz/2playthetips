import axios from 'axios'
import { clubbUrl } from '../utils'

const GET_ALL_COURSES_FROM_API = 'GET_ALL_COURSES_FROM_API'

const getAllCoursesFromApi = courses => ({
  type: GET_ALL_COURSES_FROM_API,
  courses,
})

export const getAllCoursesFromApiThunkerator = () => 
  async dispatch => {
    try {
      const courses = await axios.get(`${clubbUrl}/api/courses`)
      console.log(courses)
      dispatch(getAllCoursesFromApi(courses.data))
    }
    catch (err) {
      console.error(err)
    }
  }

export default (prevState = [], action) => {
  switch (action.type) {
    case GET_ALL_COURSES_FROM_API:
      return action.courses
    default:
      return prevState
  }
}