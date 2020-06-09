import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import CategoryNav from '../category/Category_nav';
import Promos from './promos';
import EventSamplesContainer from '../events/event_samples_container';
import EventSamples from '../events/event_samples';

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
                    <Link to="/events" className="browse-btn">Browse events  ➡</Link>
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
                <EventSamplesContainer />
            </div>
        )
    }
}

export default Splash;