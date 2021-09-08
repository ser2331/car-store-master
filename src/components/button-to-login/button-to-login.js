import React from "react";
import './button-to-login.scss'
import {Link} from "react-router-dom";
import {onAnLogged} from "../../actions/cars-actions";
import {connect} from "react-redux";

const ButtonToLogin = ({logged, onAnLogged, logName}) => {
    return (
        <div className='button-to-login'>
                {logged ? (
                        <div>
                            <div>{logName}</div>
                            <button onClick={() => onAnLogged()}>Выйти</button>
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
        onAnLogged: () => dispatch(onAnLogged()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonToLogin)