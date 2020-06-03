import { connect } from 'react-redux';
import LoginSignUpForm from './login_signup_form';
import { login, email } from '../../actions/session_actions';

const mSTP = state => ({
    email: state.session.email,
    exists: state.session.exists,
    errors: state.session.errors
})

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    email: () => dispatch(email())
})

export default connect(mSTP, mDTP)(LoginSignUpForm);