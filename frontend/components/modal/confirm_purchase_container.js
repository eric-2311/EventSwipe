import { connect } from 'react-redux';
import { createRegistration } from '../../actions/registration_actions';
import ConfirmPurchase from './confirm_purchase';

// const mSTP = (state, ownProps) => ({
//     registration: state.entities.events[ownProps.match.params.eventId],
//     user: state.entities.users[session.id]
// })

const mDTP = dispatch => ({
    createRegistration: registration => dispatch(createRegistration(registration))
})

export default connect(null, mDTP)(ConfirmPurchase);