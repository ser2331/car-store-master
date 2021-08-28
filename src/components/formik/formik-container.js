import React from 'react'
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import * as yup from 'yup'

const FormikContainer = (props) => {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({
        password: yup.string().typeError('string').required('*'),
        email: yup.string().email('Введите верный email').required('*')
    })

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnBlur
                onSubmit={(values)=>props.onFunction(values)}>
            {({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  dirty
              }) => (
                <Form onSubmit={handleSubmit}>
                    <submit type='submit'>Submit</submit>
                </Form>
            )}
        </Formik>
    )
}
export default FormikContainer