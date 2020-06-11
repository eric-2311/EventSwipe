import { connect } from 'react-redux';
import Thanks from './thanks';
import { openModal, closeModal } from '../../actions/modal_actions';

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mDTP)(Thanks);