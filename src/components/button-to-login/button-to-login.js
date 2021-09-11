import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import './button-to-login.scss'

import {onOutput} from "../../actions/cars-actions";


const ButtonToLogin = ({logged, onOutput, logName}) => {
    return (
        <div className='button-to-login'>
            {logged ? (
                    <div>
                        <div>{logName}</div>
                        <button onClick={() => onOutput()}>Выйти</button>
                    </div>
                ) :
                (
                    <Link to={'/logged'}>
                        <button>Login please</button>
                    </Link>
                )
            }
        </div>
    )
}
const mapStateToProps = ({carsPage}) => {
    return {
        logged: carsPage.logged,
        logName: carsPage.nameUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onOutput: () => dispatch(onOutput()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonToLogin)