import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to render the app
const mount = (el) => {
    ReactDOM.render(
        <App />, 
        el
    );
}

// In development mode and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#marketing-dev-root');
    if (el) {
        mount(el);
    }
}

//We are running through container, and we should export the mount function
export { mount };