import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, recieveErrors } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    // formType: 'Sign Up',
    // navLink: <Link to="/login">Already a member? Sign in!</Link>,
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(recieveErrors())
  }
};

export default connect(mSTP, mDTP)(SignUpForm)
