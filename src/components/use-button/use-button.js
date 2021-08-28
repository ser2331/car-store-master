import React from "react";
import './use-button.scss'

const UseButton = ({nameBut, onClick, disabled, type}) => {
    return (
        <button className='btn'
                type={type}
                disabled={disabled}
                onClick={onClick}>
            {nameBut}
        </button>
    )
}

export default UseButton