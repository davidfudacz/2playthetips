import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Login, Signup, Home } from './components'
import {
  me,
  getAllCourseRatingsFromServerThunkerator,
  getSelectedCourseFromClubbApiThunkerator,
  getSelectedCourseBuildsFromClubbApiThunkerator,
  getSelectedCourseReviewFromServerThunkerator,
  getSelectedCourseScorecardsFromClubbApiThunkerator,
  getSelectedCourseMembershipTypeFromClubbApiThunkerator,
} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/admin" component={Home} />
          </Switch>
        )}
        <Route component={Home} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(getAllCourseRatingsFromServerThunkerator())
      dispatch(getSelectedCourseFromClubbApiThunkerator(1))
      dispatch(getSelectedCourseBuildsFromClubbApiThunkerator(1))
      dispatch(getSelectedCourseReviewFromServerThunkerator(1))
      dispatch(getSelectedCourseScorecardsFromClubbApiThunkerator(1))
      dispatch(getSelectedCourseMembershipTypeFromClubbApiThunkerator(1))
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
