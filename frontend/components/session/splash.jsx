import React from 'react';
import GreetingContainer from '../greeting/Greeting_container';
import CategoryNav from '../category/Category_nav';

class Splash extends React.Component {
    render(){
        return (
            <div>
                {/* <GreetingContainer /> */}
                {/* <h1>Splash component!</h1> */}
                <img src={window.splashURL} className="splash-img" />
                <h1 className="event-banner">Popular in <p className="banner-purple">Online Events</p></h1>
                <CategoryNav />
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Splash;