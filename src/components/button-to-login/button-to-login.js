import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import Types from "../../services/types";
import { onOutput } from '../../actions/cars-actions';

import './button-to-login.scss';

const { routingMap } = Types;

const ButtonToLogin = ({ login, onExit, logName }) => (
    <div className="button-to-login">
        {login ? (
            <div className="btn-container">
                <div>{logName}</div>
                <button type="button" className="btn-to-log" onClick={() => onExit()}>Выйти</button>
            </div>
        )
            : (
                <Link to={routingMap.get('login').path}>
                    <button type="button" className="btn-to-log">Login please</button>
                </Link>
            )}
    </div>
);
const mapStateToProps = ({ carsPage }) => ({
    login: carsPage.login,
    logName: carsPage.nameUser,
});
const mapDispatchToProps = (dispatch) => ({
    onExit: () => dispatch(onOutput()),
});
ButtonToLogin.propTypes = {
    logName: PropTypes.string,
    onExit: PropTypes.func,
    login: PropTypes.bool,
};
ButtonToLogin.defaultProps = {
    logName: '',
    onExit: () => {},
    login: false,
};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonToLogin);
