import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";

import './app.scss'

import Logged from "../logged";
import Registration from "../registration";
import CarTable from "../car-table";
import CarItem from "../car-item";
import AddCarItem from "../add-car-item";

export default class App extends Component {

    render() {
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
                        component={CarTable}/>
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
}
