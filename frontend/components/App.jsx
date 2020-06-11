import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import EventShowContainer from './events/event_show_container';
import EventIndexContainer from './events/event_index_container';
import GreetingContainer from './greeting/Greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './session/splash_container';
import Footer from './footer/footer';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Route path="/" component={Modal} /> 
        <header className="nav">
            <Link to="/" className="nav-logo">eventswipe</Link>
            <GreetingContainer />
        </header>
        <main className="main-content">
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/events/:eventId" component={EventShowContainer} />
            <Route exact path="/events" component={EventIndexContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </main>
        <footer className="footer-container">
            <Footer  />
        </footer>
    </div>
)

export default App;