import React from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Form, Formik} from "formik";
import * as yup from 'yup'

import './registration.scss'

import UseButton from "../use-button";
import {onRegSelected} from "../../actions/cars-actions";
import FormikControl from "../form-components/FormikControl";
import {useAlert} from "react-alert";

const Registration = (props) => {
    const {users} = props
    const alert = useAlert()
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Значение должно быть строкой').required('*'),
        secondName: yup.string().typeError('string').required('*'),
        password: yup.string().typeError('string').required('*'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пороли не совпадают').required('*'),
        email: yup.string().email('Введите верный email').required('Введите верный email')
    })
    const submit = (values) => {
        props.onSubmit(values) && alert.success('Регистрация успешна')
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
                  isValid,
                  handleSubmit,
                  dirty
              }) => (
                <div className='registration'>
                    {
                        users.find((el) => el.email === values.email) ? (
                            <Redirect to='/logged'/>
                        ) : null
                    }
                    <Form onSubmit={handleSubmit}>
                        <h3>Регистрация</h3>
                        <div>
                            <FormikControl
                                touched={touched.name}
                                errors={errors.name}
                                label='Имя'
                                placeholder='Введите имя'
                                control='input'
                                name='name'/>
                            <FormikControl
                                placeholder='Введите фамилию'
                                control='input'
                                label='Фамилия'
                                touched={touched.secondName}
                                errors={errors.secondName}
                                name='secondName'/>
                            <FormikControl
                                placeholder='Введите E-mail'
                                control='input'
                                name='email'
                                label='E-mail'
                                touched={touched.email}
                                errors={errors.email}/>
                            <FormikControl
                                placeholder='Введите пароль'
                                control='input'
                                name='password'
                                label='Пароль'
                                touched={touched.password}
                                errors={errors.password}/>
                            <FormikControl
                                placeholder='Введите пароль'
                                control='input'
                                name='confirmPassword'
                                label='Подтвердите пароль'
                                touched={touched.confirmPassword}
                                errors={errors.confirmPassword}/>
                        </div>
                        <div className='btn-reg'>
                            <UseButton
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                nameBut={'Зарегистрироваться'}
                                type='submit'/>
                        </div>
                        <div className='return'>
                            <Link to='/logged'>Вернуться</Link>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
const mapStateToProps = ({carsPage}) => {
    return {
        users: carsPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (value) => dispatch(onRegSelected(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration)