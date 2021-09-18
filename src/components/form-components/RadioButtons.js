import React from 'react';
import { Field } from 'formik';
import * as PropTypes from 'prop-types';
import Condition from '../condition';

function RadioButtons({
    label, name, options, touched, errors, ...rest
}) {
    return (
        <div className="form-control">
            <p>
                {label}
                {touched && errors
                    ? (
                        <Condition
                            touched={touched}
                            errors={errors}
                        />
                    ) : null}
            </p>
            <Field name={name}>
                {({ field }) => options.map((option) => (
                    <div key={option.key}>
                        <input
                            type="radio"
                            id={option.value}
                            {...field}
                            {...rest}
                            value={option.value}
                            checked={field.value === option.value}
                        />
                        <label htmlFor={option.value}>{option.key}</label>
                    </div>
                ))}
            </Field>
        </div>
    );
}
RadioButtons.defaultProps = {
    touched: false,
    errors: '',
    label: '',
    name: '',
    options: [],
};
RadioButtons.propTypes = {
    touched: PropTypes.bool,
    errors: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
};

export default RadioButtons;
