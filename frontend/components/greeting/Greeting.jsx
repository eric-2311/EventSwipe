import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    dropdown(){
        // let menu = document.getElementsByClassName('menu-dropdown');
        // // ;
        // if (menu.display === "none"){
        //     menu.display = "block" 
        // } else {
        //     menu.display = "none"
        // }
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
                            <li className="menu-item"><button>Profile</button></li>
                            <li className="menu-item"><button>Tickets</button></li>
                            <li className="menu-item"><button>Liked</button></li>
                            <li className="menu-item"><button>Following</button></li>
                            <li className="menu-item"><button>Collections</button></li>
                            <li className="menu-item"><button>Interests</button></li>
                            <li className="menu-item"><button>Manage Events</button></li>
                            <li className="menu-item"><button>Account Settings</button></li>
                            <li className="menu-item"><button className="logout" onClick={this.props.logout}>Logout</button></li>
                        </ul>
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