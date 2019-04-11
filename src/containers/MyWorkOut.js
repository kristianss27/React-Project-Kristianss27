import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/workout'
import WorkOut from '../components/WorkOut'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
  workout: state.workout
})

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(withRouter(WorkOut))
