import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import Types from "../../services/types";

const { routingMap } = Types;

const AuthRouter = ({ component, path, logged }) => {

    return (logged ? (
        <Route
            path={path}
            component={component}
        />
    ) : <Redirect to={routingMap.get('login').path} />);
}

AuthRouter.propTypes = {
    path: PropTypes.string,
    component: PropTypes.elementType.isRequired,
    logged: PropTypes.bool,
};
AuthRouter.defaultProps = {
    path: '',
    logged: false,
};
export default AuthRouter;
