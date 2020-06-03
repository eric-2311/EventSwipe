import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './actions/session_actions';  
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();

<<<<<<< HEAD
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
=======
    let store;
    if (window.currentUser) {
        const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
            users: { [window.currentUser.id]: window.currentUser }
        }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
>>>>>>> auth

    // Testing
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
})