import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './button-to-login.scss';
import * as PropTypes from 'prop-types';
import { onOutput } from '../../actions/cars-actions';

const ButtonToLogin = ({ logged, onExit, logName }) => (
    <div className="button-to-login">
        {logged ? (
            <div className="btn-container">
                <div>{logName}</div>
                <button type="button" className="btn-to-log" onClick={() => onExit()}>Выйти</button>
            </div>
        )
            : (
                <Link to="/logged">
                    <button type="button" className="btn-to-log">Login please</button>
                </Link>
            )}
    </div>
);
const mapStateToProps = ({ carsPage }) => ({
    logged: carsPage.logged,
    logName: carsPage.nameUser,
});
const mapDispatchToProps = (dispatch) => ({
    onExit: () => dispatch(onOutput()),
});
ButtonToLogin.propTypes = {
    logName: '',
    onExit: () => {},
    logged: false,
};
ButtonToLogin.defaultProps = {
    logName: PropTypes.string,
    onExit: PropTypes.func,
    logged: PropTypes.bool,
};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonToLogin);
