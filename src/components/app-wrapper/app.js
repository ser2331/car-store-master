import React from 'react'
import {Redirect, Route} from "react-router-dom";

import './app.scss'

import CarItem from "../car-item";
import AddCarItem from "../add-car-item";
import {CarTableContainer, PropertyContainer} from "../containers";
import AddProperty from "../add-property/add-property";
import {connect} from "react-redux";

const AppWrapper = ({logged}) => {
    if(logged){
        return (
            <div>
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
            </div>
        )
    }else{
        return (<Redirect to='/'/>)
    }
}
const mapStateToProps = ({carsPage}) => {
    return {
        logged:carsPage.logged
    }
}
const mapDispatchToProps = () => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AppWrapper)