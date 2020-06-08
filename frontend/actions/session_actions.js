import * as SessionApiUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const login = user => dispatch => {
    // ;
    return (
    SessionApiUtils.login(user).then(user => (
        dispatch(receiveCurrentUser(user))), err => (
            dispatch(receiveErrors(err.responseJSON))
          ))
)}

const signUpUser = user => ({
    type: SIGN_UP_USER,
    user
})

export const signup = user => dispatch => (
    SessionApiUtils.signup(user)
        .then(user => dispatch(signUpUser(user)), err => {
            // debugger
            return dispatch(receiveErrors(err.responseJSON))
        })
)

const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const logout = () => dispatch => (
    SessionApiUtils.logout()
        .then(() => dispatch(logoutUser()), err => (
            dispatch(receiveErrors(err.responseJSON))
          ))
)

export const receiveErrors = errors => {
    // debugger;
    return {type: RECEIVE_SESSION_ERRORS,
    errors}
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

const getEmail = email => {
    return ({type: RECEIVE_EMAIL,
    email})
}

export const validateEmail = email => dispatch => {
    
    return (SessionApiUtils.getEmail(email)
        .then(email => {
            dispatch(getEmail(email))
        }))
}