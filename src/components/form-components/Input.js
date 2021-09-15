import React from 'react';
import { Field } from 'formik';
import * as PropTypes from 'prop-types';
import Condition from '../condition';

const Input = ({
    label, name, touched, errors, ...rest
}) => (
    <div className="form-control">
        <label htmlFor={name}>
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
    touched: '',
    errors: '',
    label: '',
    name: '',
};
Input.defaultProps = {
    touched: PropTypes.string,
    errors: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
};
export default Input;
