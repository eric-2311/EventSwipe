import React from 'react';
import GreetingContainer from '../greeting/Greeting_container';

class Splash extends React.Component {
    render(){
        return (
            <div>
                {/* <GreetingContainer /> */}
                {/* <h1>Splash component!</h1> */}
                <img src={window.splashURL} className="splash-img" />
            </div>
        )
    }
}

export default Splash;