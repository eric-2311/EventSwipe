import { connect } from 'react-redux';
import { fetchEvent, fetchAllEvents } from '../../actions/event_actions';
import { fetchUsers } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
// import { fetchUsers } from '../../actions/session_actions';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    debugger
    return { event: state.entities.events[ownProps.match.params.eventId],
            users: state.entities.events.users }
}

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    fetchEvents: () => dispatch(fetchAllEvents()),
    openModal: modal => dispatch(openModal(modal)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(EventShow);