import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addChangePresentationHandler, getState } from './state';
import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function render() {
    root.render(
        <Provider store={store}>
            <React.StrictMode>
                <App presentation={getState()}/>
            </React.StrictMode>
        </Provider>
    );
}

// addChangePresentationHandler(render);
render();

// reportWebVitals();