import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import Logged from '../logged';
import Registration from '../registration';
import { CarTableContainer, PropertyContainer } from '../containers';
import AuthRouter from '../auth-router';
import AddProperty from '../add-property/add-property';
import CarItem from '../car-item';
import AddCarItem from '../add-car-item';
import './app.scss';

const App = ({ logged }) => (
    <div className="app">
        <Switch>
            <AuthRouter
                logged={logged}
                path="/add-property/"
                component={AddProperty}
            />
            <AuthRouter
                logged={logged}
                path="/cars/:id"
                component={CarItem}
            />
            <AuthRouter
                logged={logged}
                path="/add-item"
                component={AddCarItem}
            />
            <Route
                path="/logged"
                component={Logged}
            />
            <Route
                path="/registration"
                component={Registration}
            />
            <Route
                path="/"
                exact
                component={CarTableContainer}
            />
            <Route
                path="/details/"
                exact
                component={PropertyContainer}
            />
        </Switch>
    </div>
);
const mapStateToProps = ({ carsPage }) => ({
    logged: carsPage.logged,
});
App.propTypes = {
    logged: false,
};
App.defaultProps = {
    logged: PropTypes.bool,
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);
