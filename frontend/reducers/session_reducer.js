import { RECEIVE_CURRENT_USER, 
        LOGOUT_CURRENT_USER, 
        SIGN_UP_USER, 
        RECEIVE_EMAIL } from '../actions/session_actions';

const _nullUser = Object.freeze({ id: null })

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    // debugger;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { id: action.currentUser.id });
        case SIGN_UP_USER:
            return Object.assign({}, state, { id: action.user.id });
        case RECEIVE_EMAIL:
            let flag;
            if (action.email === null){
                flag = null;
            } else{
                flag = true;
            }
            const newState = Object.assign({}, state, { email: action.email, flag: flag });
            return newState;
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
}

export default sessionReducer;