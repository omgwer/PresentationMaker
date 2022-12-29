import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addChangePresentationHandler, getState } from './state';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function render() {
    root.render(
        <React.StrictMode>
            <App presentation={getState()}/>
        </React.StrictMode>
    );
}

addChangePresentationHandler(render);
render();

// reportWebVitals();