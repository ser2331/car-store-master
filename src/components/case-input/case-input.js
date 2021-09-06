import React from 'react'
import FormikControl from "../form-components/FormikControl";


const dropOptions = [
    {key: 'op1', value: 'po1'},
    {key: 'op2', value: 'po2'},
    {key: 'op3', value: 'po3'},
]
const CaseInput = (props) => {
    const {use, value} = props
    switch (use) {
        case 'dropdown':
            return <FormikControl control='select'
                                  label='Значение'
                                  name={value}
                                  options={dropOptions}/>
        case 'number':
            return <FormikControl control='input'
                                  label='Значение'
                                  name={value}/>
        case 'string':
            return <FormikControl control='input'
                                  label='Значение'
                                  name={value}/>
        default:
            return null
    }
}
export default CaseInput