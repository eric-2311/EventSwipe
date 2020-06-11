import { connect } from 'react-redux';
import TicketPurchaseForm from './ticket_purchase_form';
import { fetchEvent } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    // debugger
    return {event: state.entities.events[ownProps.location.pathname.split("/")[2]]}
}

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    openModal: modal => dispatch(openModal(modal)) 
})

export default (withRouter(connect(mSTP, mDTP)(TicketPurchaseForm)));