import React from "react";
import './button-to-login.scss'

const ButtonToLogin = ({logged, onAnLogged, logName}) => {
    return logged ?
        <div className='button-to-login'>
            <div>
                <div>{logName}</div>
                <button onClick={() => onAnLogged()}>Выйти</button>
            </div>
        </div> :
        <div className='button-to-login'>Login please</div>
}
export default ButtonToLogin