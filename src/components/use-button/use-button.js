import React from 'react';
import './use-button.scss';
import * as PropTypes from 'prop-types';

const UseButton = ({
    nameBut, onClickButton, disabled,
}) => (
    <button
        className="btn"
        type="button"
        disabled={disabled}
        onClick={onClickButton}
    >
        {nameBut}
    </button>
);
UseButton.propTypes = {
    nameBut: '',
    onClickButton: () => {},
    disabled: false,
};
UseButton.defaultProps = {
    nameBut: PropTypes.string,
    onClickButton: PropTypes.func,
    disabled: PropTypes.bool,
};
export default UseButton;
