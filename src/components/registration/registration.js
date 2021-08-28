import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Field, Form, Formik} from "formik";
import * as yup from 'yup'

import './registration.scss'

import UseButton from "../use-button";
import {onRegSelected} from "../../actions";
import Condition from "../condition";

const Registration = (props) => {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Значение должно быть строкой').required('*'),
        secondName: yup.string().typeError('string').required('*'),
        password: yup.string().typeError('string').required('*'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пороли не совпадают').required('*'),
        email: yup.string().email('Введите верный email').required('Введите верный email')
    })

    const submit = (values) => {
        props.onSubmit(values)
    }


    return (
        <Formik
            initialValues={{
                name: '',
                secondName: '',
                password: '',
                confirmPassword: '',
                email: ''
            }
            }
            validateOnBlur
            onSubmit={submit}
            validationSchema={validationsSchema}>
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
                <div className='registration'>
                    <Form onSubmit={handleSubmit}>
                        <h3>Регистрация</h3>
                        <div>
                            <p>
                                <label htmlFor='name'>Имя</label>
                                <Condition
                                    touched={touched.name}
                                    errors={errors.name}/>
                                <br/>
                                <Field placeholder='Введите логин'
                                       type='text'
                                       name='name'
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.name}/>
                            </p>
                            <p>
                                <label htmlFor='secondName'>Фамилия</label>
                                <Condition
                                    touched={touched.secondName}
                                    errors={errors.secondName}/>
                                <br/>
                                <Field placeholder='Введите фамилию'
                                       type='text'
                                       name='secondName'
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.secondName}/>
                            </p>
                            <p>
                                <label htmlFor='email'>E-mail</label>
                                <Condition
                                    touched={touched.email}
                                    errors={errors.email}/>
                                <br/>
                                <Field placeholder='Введите E-mail'
                                       type='email'
                                       name='email'
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.email}/>
                            </p>
                            <p>
                                <label htmlFor='password'>Пароль</label>
                                <Condition
                                    touched={touched.password}
                                    errors={errors.password}/>
                                <br/>
                                <Field placeholder='Введите пароль'
                                       type='password'
                                       name='password'
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}/>
                            </p>
                            <p>
                                <label htmlFor='confirmPassword'>Подтвердите пароль</label>
                                <Condition
                                    touched={touched.confirmPassword}
                                    errors={errors.confirmPassword}/>
                                <br/>
                                <input placeholder='Введите пароль'
                                       type='password'
                                       name='confirmPassword'
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.confirmPassword}/>
                            </p>
                        </div>
                        <UseButton
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            nameBut={'Зарегистрироваться'}
                            type='submit'/>
                        <div className='return'>
                            <Link to='/'>Вернуться</Link>
                        </div>
                    </Form>
                </div>

            )
            }
        </Formik>
    )
}
const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (value) => dispatch(onRegSelected(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration)

