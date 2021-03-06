import { connect } from 'react-redux'
import EventSamples from './event_samples'
import { fetchAllEvents, fetchEvent } from '../../actions/event_actions';

const mSTP = state => ({
    events: Object.values(state.entities.events),
    user: state.session
})

const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchAllEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(EventSamples);