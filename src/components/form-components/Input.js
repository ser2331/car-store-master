import React from 'react'
import {Field} from 'formik'
import Condition from "../condition";

const Input = (props) => {
    const {label, name, touched, errors, ...rest} = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>
                {label}
                {touched && errors ? <Condition touched={touched}
                                                errors={errors}/> : <sup>  </sup>}
            </label>
            <Field id={name} name={name} {...rest} />
        </div>
    )
}
export default Input