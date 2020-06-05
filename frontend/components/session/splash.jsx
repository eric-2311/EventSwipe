import React from 'react';
import GreetingContainer from '../greeting/Greeting_container';
import CategoryNav from '../category/Category_nav';
import Promos from './promos';

class Splash extends React.Component {
    render(){
        return (
            <div className="welcome-container">
                <section className="splash-welcome">
                <aside className="message-container">
                    <h1 className="welcome-message">
                        Swipe into your next 
                        <br/>
                        <p className="event-word">event!</p>
                    </h1>
                    <input type="submit" value="Browse events  ➡" className="browse-btn"/>
                </aside>
                    <div className="image-container">
                        <img src={window.splashURL} className="splash-img" />
                    </div>
                </section>
                <h1 className="event-banner">Popular in <p className="banner-purple">Online Events</p></h1>
                <CategoryNav />
                <br/>
                <br/>
                <br/>
                <Promos />
            </div>
        )
    }
}

export default Splash;