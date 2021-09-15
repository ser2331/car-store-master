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
    component: {},
    path: '',
    logged: false,
};
AuthRouter.defaultProps = {
    path: PropTypes.string,
    component: PropTypes.object,
    logged: PropTypes.bool,
};
export default AuthRouter;
