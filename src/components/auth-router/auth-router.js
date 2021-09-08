import React from "react";
import {Redirect, Route} from "react-router-dom";

const AuthRouter=({component, path,logged})=>{
   return  logged ? <Route
                path={path}
                component={component}/> : <Redirect to='/logged' />
}

export default AuthRouter