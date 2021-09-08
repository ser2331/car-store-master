import React from 'react'
import { Route, Switch} from "react-router-dom";

import './app.scss'

import Logged from "../logged";
import Registration from "../registration";
import AppWrapper from "../app-wrapper";
import {CarTableContainer, PropertyContainer} from "../containers";

const App = () => {
    return (
        <div className='app'>
            <Switch>
                <Route
                    path='/'
                    exact
                    component={Logged}/>
                <Route
                    path='/registration'
                    component={Registration}/>
                <Route
                    path='/'
                    component={AppWrapper}/>
                <Route
                    path='/cars/'
                    exact
                    component={CarTableContainer}/>
                <Route
                    path='/details/'
                    exact
                    component={PropertyContainer}/>
            </Switch>
        </div>
    )
}
export default App