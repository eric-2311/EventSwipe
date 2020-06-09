import { connect } from 'react-redux';
import { fetchAllEvents, fetchEvent } from '../../actions/event_actions';
import EventIndex from './event_index';

const mSTP = state => ({
    events: Object.values(state.entities.events),
    user: state.session
})

const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchAllEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(EventIndex)