import { connect } from 'react-redux';
import Splash from './splash';

const mSTP = state => ({
    // currentUser: state.entities.user[state.session.id]
})

const mDTP = dispatch => ({

})

export default connect(mSTP)(Splash);