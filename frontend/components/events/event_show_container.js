import { connect } from 'react-redux';
import { fetchEvent, fetchAllEvents } from '../../actions/event_actions';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    // debugger
    return {event: state.entities.events[ownProps.match.params.eventId],
            events: state.entities.events}
}

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    fetchEvents: () => dispatch(fetchAllEvents())
})

export default connect(mSTP, mDTP)(EventShow);