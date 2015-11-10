import App from '../components/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions'

function mapStateToProps(state) {
  return {
    user: state.user,
    tweets: state.tweets
  }
}

export default connect(mapStateToProps, actionCreators)(App);