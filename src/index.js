import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import App from './components/app';
import store from './store';

const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 1500,
    offset: '30px',
    transition: transitions.SCALE,
};
ReactDOM.render(
    <Provider store={store}>
        <Router hashType="slash">
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
