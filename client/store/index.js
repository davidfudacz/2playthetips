import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import courses from './courses'
import courseRatings from './course-ratings'
import selectedCourse from './selected-course'
import selectedCourseBuilds from './selected-course-builds'

const reducer = combineReducers({
  user,
  courses,
  courseRatings,
  selectedCourse,
  selectedCourseBuilds,
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './courses'
export * from './course-ratings'
export * from './selected-course'
export * from './selected-course-builds'
