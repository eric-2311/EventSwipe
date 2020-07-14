import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        // ;
        // debugger
        if (this.props.currentUser){
            return (
                <div className="nav-right">
                    <div className="menu-btn">
                        <img src={window.profpicURL} className="profile-pic"/>
                        <ul className="menu-dropdown">
                            <li className="menu-item"><button className="logout" onClick={this.props.logout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
        )} else {
                return (
                    <div>
                        <Link to='/login' className="sign-in-btn">Sign In</Link>
                    </div>
                )
            }
    }
}

export default Greeting;