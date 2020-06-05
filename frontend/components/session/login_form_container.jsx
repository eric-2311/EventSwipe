import { connect } from 'react-redux';
<<<<<<< HEAD
import { login, recieveErrors } from '../../actions/session_actions';
=======
import { Link } from 'react-router-dom';
import { login, recieveErrors, validateEmail } from '../../actions/session_actions';
>>>>>>> auth
import LoginForm from './login_form';

const mSTP = state => {
  return {
    email: state.session.email,
    errors: state.errors.session,
    exists: state.session.exists
  };
};

const mDTP = dispatch => {
  ;
  return {
    processForm: user => dispatch(login(user)),
    receiveEmail: email => dispatch(validateEmail(email)),
    removeErrors: () => dispatch(recieveErrors()),
  };
};

export default connect(mSTP, mDTP)(LoginForm);