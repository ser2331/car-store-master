import React from "react";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";

import './add-property.scss'

const AddProperty = () => {
    const initialValues = {
        addProperty: false,
        year: '',
        color: '',
        fuel: ''
    }
    const validationsSchemaLog = yup.object().shape({
        addProperty: yup.bool(),
        year: yup.string().when('addProperty', {
            is: false,
            then: yup.string()
        }),
        color: yup.string().when('addProperty', {
            is: false,
            then: yup.string()
        }),
        fuel: yup.string().when('addProperty', {
            is: false,
            then: yup.string()
        }),
    })
    return (
        <div className='add-car-item'>
            <Formik
                initialValues={initialValues}
                validateOnBlur
                onSubmit={() => {
                }}
                validationSchema={validationsSchemaLog}>
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
                    <Form>
                        <p>Добавление элементу свойств
                            <input
                                type='checkbox'
                                name='addProperty'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                checked={values.addProperty}/>
                        </p>
                        {!values.addProperty &&
                        <div className='new-property'>
                            <div>
                                <span>Свойство 1</span>
                                <div className='prop'>
                                    <p>Год выпуска</p>
                                    <Field placeholder='2008'
                                           type='number'
                                           name='year'
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.year}/>
                                </div>
                            </div>
                            <div>
                                <span>Свойство 2</span>
                                <div className='prop'>
                                    <p>Цвет авто</p>
                                    <Field placeholder='синий'
                                           type='text'
                                           name='color'
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.color}/>
                                </div>
                            </div>
                            <div>
                                <span>Свойство 3</span>
                                <div className='prop'>
                                    <p>Вид топлива</p>
                                    <Field placeholder='бензин'
                                           type='text'
                                           name='fuel'
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.fuel}/>
                                </div>
                            </div>
                        </div>
                        }
                    </Form>
                )
                }
            </Formik>
        < /div>
    )
}
export default AddProperty