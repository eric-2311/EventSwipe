import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

// import EventSamplesContainer from './events/event_samples_container';
import EventIndexContainer from './events/event_index_container';
import GreetingContainer from './greeting/Greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './session/splash_container';
import Footer from './footer/footer';

const App = () => (
    <div className="nav-container">
        <header className="nav">
            <Link to="/" className="nav-logo">eventswipe</Link>
            <GreetingContainer />
        </header>
        <main className="main-content">
        {/* <Switch> */}
            {/* <SplashContainer /> */}
            <Route exact path="/" component={SplashContainer} />
            {/* <Route exact path="/" component={EventSamplesContainer} /> */}
            <Route exact path="/events" component={EventIndexContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* </Switch> */}
        </main>
        <Footer className="footer-container" />
    </div>
)

export default App;