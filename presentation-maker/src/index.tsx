import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addChangePresentationHandler, getState } from './state';
import { Provider } from 'react-redux'
import { store } from './state/index';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function render() {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App presentation={getState()}/>
            </Provider>
        </React.StrictMode>
    );
}

// addChangePresentationHandler(render);
render();

// reportWebVitals();