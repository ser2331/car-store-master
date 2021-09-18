import React from 'react';
import { Field } from 'formik';
import * as PropTypes from 'prop-types';

const Textarea = ({ label, name, ...rest }) => (
    <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as="textarea" id={name} name={name} {...rest} />
    </div>
);
Textarea.defaultProps = {
    label: '',
    name: '',
};
Textarea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
};
export default Textarea;
