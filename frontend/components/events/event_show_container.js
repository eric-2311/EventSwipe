import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import EventShow from './event_show';

const mSTP = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId]
})

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(EventShow);