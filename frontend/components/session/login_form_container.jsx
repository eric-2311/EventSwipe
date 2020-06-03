import { connect } from 'react-redux';
import { login, recieveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mSTP = state => {
  return {
    email: state.session.email,
    errors: state.errors.session
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(recieveErrors())
  };
};

export default connect(mSTP, mDTP)(LoginForm);