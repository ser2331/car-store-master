import React from 'react';
import * as PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import RadioButtons from './RadioButtons';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
    case 'input':
        return <Input {...rest} />;
    case 'textarea':
        return <Textarea {...rest} />;
    case 'select':
        return <Select {...rest} />;
    case 'radio':
        return <RadioButtons {...rest} />;
    default:
        return null;
    }
};
FormikControl.propTypes = {
    control: PropTypes.string,
};
FormikControl.defaultProps = {
    control: '',
};
export default FormikControl;
