import React from 'react'
import Input from "./input";

const FormikControl=(props)=>{
    const {control, ...rest} = props
    switch (control) {
        case 'input': return <Input {...rest}/>
        case 'file':
        case 'textarea':
        default: return null
    }
}
export default FormikControl