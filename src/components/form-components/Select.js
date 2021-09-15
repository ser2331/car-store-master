import React from 'react';
import { Field } from 'formik';
import * as PropTypes from 'prop-types';

const Select = ({
    label, name, options, ...rest
}) => (
    <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as="select" id={name} name={name} {...rest}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.key}
                </option>
            ))}
        </Field>
    </div>
);
Select.propTypes = {
    touched: '',
    errors: '',
    label: '',
    name: '',
    options: [],
};
Select.defaultProps = {
    touched: PropTypes.string,
    errors: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
};
export default Select;
