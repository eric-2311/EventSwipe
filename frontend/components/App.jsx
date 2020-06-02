import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting/Greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <header>
            <h1>Welcome to EventSwipe!</h1>
            <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;