import * as EventApiUtils from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

const receiveAllEvents = events => ({
    type: RECEIVE_ALL_EVENTS,
    events
})

export const fetchAllEvents = () => dispatch => (
    EventApiUtils.fetchEvents()
        .then(events => dispatch(receiveAllEvents(events)))
)

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})

export const fetchEvent = eventId => dispatch => {
    return EventApiUtils.fetchEvent(eventId)
                .then(event => {
                    // debugger
                    return dispatch(receiveEvent(event))})
}

export const createEvent = event => dispatch => (
    EventApiUtils.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
)

export const updateEvent = event => dispatch => (
    EventApiUtils.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)))
)

const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
})

export const deleteEvent = eventId => dispatch => (
    EventApiUtils.deleteEvent(eventId)
        .then(() => dispatch(removeEvent(eventId)))
)