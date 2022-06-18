import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import Types from "../../services/types";
import Login from '../login';
import Registration from '../registration';
import { CarTableContainer, PropertyContainer } from '../containers';
import AuthRouter from '../auth-router';
import AddProperty from '../add-property/add-property';
import CarItem from '../car-item';
import AddCarItem from '../add-car-item';

import './app.scss';

const { routingMap } = Types;

const App = ({ login }) => (
    <div className="App">
        <Switch>
            <AuthRouter
                logged={login}
                path={routingMap.get('addProperty').path}
                component={AddProperty}
            />
            <AuthRouter
                logged={login}
                path={routingMap.get('cars').path}
                component={CarItem}
            />
            <AuthRouter
                logged={login}
                path={routingMap.get('addItem').path}
                component={AddCarItem}
            />
            <Route
                path={routingMap.get('login').path}
                component={Login}
            />
            <Route
                path={routingMap.get('registration').path}
                component={Registration}
            />
            <Route
                path={routingMap.get('location').path}
                exact
                component={CarTableContainer}
            />
            <Route
                path={routingMap.get('details').path}
                exact
                component={PropertyContainer}
            />
        </Switch>
    </div>
);
const mapStateToProps = ({ carsPage }) => ({
    login: carsPage.login,
});
App.propTypes = {
    login: PropTypes.bool,
};
App.defaultProps = {
    login: false,
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);
