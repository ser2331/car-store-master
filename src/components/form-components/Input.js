import React from 'react';
import { Field } from 'formik';
import * as PropTypes from 'prop-types';
import Condition from '../condition';

const Input = ({
    label, name, touched, errors, labelStyle,...rest
}) => (
    <div className="form-control">
        <label htmlFor={name} className={labelStyle}>
            {label}
            {touched && errors ? (
                <Condition
                    touched={touched}
                    errors={errors}
                />
            ) : <sup>  </sup>}
        </label>
        <Field id={name} name={name} {...rest} />
    </div>
);
Input.propTypes = {
    touched: PropTypes.bool,
    errors: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
};
Input.defaultProps = {
    touched: false,
    errors: '',
    label: '',
    name: '',
};
export default Input;
