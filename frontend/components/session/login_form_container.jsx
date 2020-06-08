import { connect } from 'react-redux';
import { login, receiveErrors, validateEmail } from '../../actions/session_actions';
import LoginForm from './login_form';

const mSTP = state => {
  debugger
  return {
    email: state.session.email,
    errors: state.errors.session,
    exists: state.session.exists,
    flag: state.session.flag
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    receiveEmail: email => dispatch(validateEmail(email))
    // removeErrors: () => dispatch(receiveErrors()),
  };
};

export default connect(mSTP, mDTP)(LoginForm);