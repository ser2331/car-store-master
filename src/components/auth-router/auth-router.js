import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';

const AuthRouter = ({ component, path, logged }) => (logged ? (
    <Route
        path={path}
        component={component}
    />
) : <Redirect to="/logged" />);

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
