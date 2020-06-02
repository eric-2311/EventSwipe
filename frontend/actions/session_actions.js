import * as SessionApiUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const login = user => dispatch => (
    SessionApiUtils.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
)

const signUpUser = user => ({
    type: SIGN_UP_USER,
    user
})

export const signup = user => dispatch => (
    SessionApiUtils.signup(user)
        .then(user => dispatch(signUpUser(user)))
)

const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const logout = () => dispatch => (
    SessionApiUtils.logout()
        .then(() => dispatch(logoutUser()))
)

export const recieveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

