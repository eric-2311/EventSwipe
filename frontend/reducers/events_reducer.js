import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import { RECEIVE_REGISTRATION } from '../actions/registration_actions';
import { RECEIVE_USERS } from '../actions/session_actions';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_ALL_EVENTS:
            // debugger
            return action.events;
        case RECEIVE_EVENT:
            // debugger
            return Object.assign({}, state, { [action.event.id]: action.event });
        case REMOVE_EVENT:
            const newState = Object.assign({}, state);
            delete newState[action.eventId];
            return newState;
        case RECEIVE_USERS:
            // const newState = Object.assign({}, state, { [action.event.id]: action.event })
            // return newState;
        case RECEIVE_REGISTRATION:
            return state;
        default:
            return state;
    }
}

export default eventsReducer;