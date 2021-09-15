import React from 'react';
import * as PropTypes from 'prop-types';
import './condition.scss';

const Condition = ({ touched, errors }) => {
    let classNames = 'star';
    if (touched && errors) {
        classNames += ' error';
    }
    return <sup className={classNames}>* </sup>;
};
Condition.propTypes = {
    touched: '',
    errors: '',
};
Condition.defaultProps = {
    touched: PropTypes.string,
    errors: PropTypes.string,
};
export default Condition;
