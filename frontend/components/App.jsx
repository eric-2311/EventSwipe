import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './greeting/Greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './session/splash_container';
// import LoginSignUpFormContainer from './session/login_signup_form_container';

const App = () => (
    <div className="nav-container">
        <header className="nav">
            <Link to="/" className="nav-logo">eventswipe</Link>
            <GreetingContainer />
        </header>
        <main>
        {/* <Switch> */}
            {/* <SplashContainer /> */}
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            {/* <AuthRoute exact path="/loginsignup" component={LoginSignUpFormContainer} /> */}
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* </Switch> */}
        </main>
    </div>
)

export default App;