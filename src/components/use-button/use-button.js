import React from 'react';
import './use-button.scss';
import * as PropTypes from 'prop-types';

const UseButton = ({
    nameBut, onClickButton, disabled, isSubmit,
}) => (
    <button
        className="btn"
        type={isSubmit ? 'submit' : 'button'}
        disabled={disabled}
        onClick={onClickButton}
    >
        {nameBut}
    </button>
);
UseButton.propTypes = {
    nameBut: PropTypes.string,
    onClickButton: PropTypes.func,
    disabled: PropTypes.bool,
    isSubmit: PropTypes.bool,
};
UseButton.defaultProps = {
    nameBut: '',
    onClickButton: () => {},
    disabled: false,
    isSubmit: false,
};
export default UseButton;
