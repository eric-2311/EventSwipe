import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

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

    // Testing
    window.getState = store.getState;
    // window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
})