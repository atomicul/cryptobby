import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter >
        <App />
    </HashRouter>
);
