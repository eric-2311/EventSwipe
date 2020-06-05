import { RECEIVE_EMAIL } from '../actions/session_actions';

const currentUserReducer = (state = {}, action) => {
    Object.freeze(state)
    ;
    switch(action.type){
        
        default:
            return state;
    }
}

export default currentUserReducer;