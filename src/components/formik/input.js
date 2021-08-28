import React from 'react'
import {Field} from "formik";

const Input=(props)=>{
    const {label,name,...rest}=props
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
        </div>
    )
}
export  default Input