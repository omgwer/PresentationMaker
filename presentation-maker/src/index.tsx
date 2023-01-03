import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {store} from "./state/Store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function render() {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}

// addChangePresentationHandler(render);
render();

// reportWebVitals();