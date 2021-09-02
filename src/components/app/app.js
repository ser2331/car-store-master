import React from 'react'
import { Route, Switch} from "react-router-dom";

import './app.scss'

import Logged from "../logged";
import Registration from "../registration";
import CarItem from "../car-item";
import AddCarItem from "../add-car-item";
import {CarTableContainer, PropertyContainer} from "../containers";
import AddProperty from "../add-property/add-property";

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
                    path='/cars/'
                    exact
                    component={CarTableContainer}/>
                <Route
                    path='/details/'
                    exact
                    component={PropertyContainer}/>
                <Route
                    path='/add-property/'
                    exact
                    component={AddProperty}/>
                <Route
                    path='/cars/:id'
                    component={CarItem}/>
                <Route
                    path='/add-item'
                    component={AddCarItem}/>
            </Switch>
        </div>
    )
}
export default App