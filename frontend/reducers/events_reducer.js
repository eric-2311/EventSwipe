import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_ALL_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            return Object.assign({}, state, { [action.event.id]: action.eventId });
        case REMOVE_EVENT:
            const newState = Object.assign({}, state);
            delete newState[action.eventId];
            return newState;
        default:
            return state;
    }
}

export default eventsReducer;