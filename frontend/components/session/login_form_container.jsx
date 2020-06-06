import { connect } from 'react-redux';
import { login, recieveErrors, validateEmail } from '../../actions/session_actions';
import LoginForm from './login_form';

const mSTP = state => {
  debugger
  return {
    email: state.session.email,
    errors: state.errors.session,
    exists: state.session.exists
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    receiveEmail: email => dispatch(validateEmail(email)),
    removeErrors: () => dispatch(recieveErrors()),
  };
};

export default connect(mSTP, mDTP)(LoginForm);