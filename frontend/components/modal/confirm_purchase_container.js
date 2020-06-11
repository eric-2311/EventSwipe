import { connect } from 'react-redux';
import { createRegistration } from '../../actions/registration_actions';
// import { fetch}
import ConfirmPurchase from './confirm_purchase';

const mSTP = ({ session, entities: { users } }) => ({
    // registration: state.entities.events[ownProps.match.params.eventId],
    user: users[session.id]
})

const mDTP = dispatch => ({
    createRegistration: registration => dispatch(createRegistration(registration))
})

export default connect(mSTP, mDTP)(ConfirmPurchase);