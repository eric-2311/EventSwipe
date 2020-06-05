<<<<<<< HEAD
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_EMAIL } from '../actions/session_actions';
=======
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, SIGN_UP_USER, RECEIVE_EMAIL } from '../actions/session_actions';
>>>>>>> auth

const _nullUser = Object.freeze({ id: null })

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    // debugger;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
<<<<<<< HEAD
<<<<<<< HEAD
            return Object.assign({}, state, { id: action.currentUser.id });
=======
            return Object.assign({}, state, { id: action.user.id });
>>>>>>> auth
=======
            return Object.assign({}, state, { id: action.currentUser.id });
        case SIGN_UP_USER:
            return Object.assign({}, state, { id: action.user.id });
        case RECEIVE_EMAIL:
            const newState = Object.assign({}, state);
            newState['loginEmail'] = action.email["email"];
            return newState
>>>>>>> auth
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
}

export default sessionReducer;