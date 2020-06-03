import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.currentUser){
            return (
                <div className="nav-right">
                    <div className="menu-btn">
                        <img src={window.profpicURL} className="profile-pic"/>
                    </div>
                    <div className="menu-dropdown">
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                </div>
        )} else {
                return (
                    <div>
                        {/* <Link to='/signup'>Sign Up!</Link> */}
                        <Link to='/login' className="sign-in-btn">Sign In</Link>
                    </div>
                )
            }
    }
}

export default Greeting;