import { connect } from 'react-redux';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mSTP = state => {
  // debugger
  return {
    errors: state.errors.session
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user))
  }
};

export default connect(mSTP, mDTP)(SignUpForm)
