import React from 'react'
import {Field} from 'formik'
import Condition from "../condition";

function RadioButtons(props) {
    const {label, name, options,touched, errors, ...rest} = props
    return (
        <div className='form-control'>
            <label>{label}
                {touched && errors ?
                    <Condition touched={touched}
                               errors={errors}/> : null}
            </label>
            <Field name={name}>
                {({field}) => {
                    return options.map(option => {
                        return (
                            <div key={option.key}>
                                <input
                                    type='radio'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </div>
                        )
                    })
                }}
            </Field>
        </div>
    )
}

export default RadioButtons
