import React from "react";
import './use-button.scss'

const UseButton = ({nameBut, onClickButton, disabled, type}) => {
    return (
        <button className='btn'
                type={type}
                disabled={disabled}
                onClick={onClickButton}>
            {nameBut}
        </button>
    )
}

export default UseButton