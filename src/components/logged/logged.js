import React from "react";
import {Link, Redirect} from "react-router-dom";
import * as yup from "yup";
import {Form, Formik} from "formik";
import {connect} from "react-redux";

import './logged.scss'

import UseButton from "../use-button";
import {onLogSelected} from "../../actions";
import FormikControl from "../form-components/FormikControl";


const Logged = (props) => {
    const validationsSchemaLog = yup.object().shape({
        password: yup.string().typeError('string').required('*'),
        email: yup.string().email('Введите верный email').required('*')
    })
    if (props.logged) {
        return <Redirect to='/cars/'/>
    }
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }
            }
            validateOnBlur
            onSubmit={(values) => props.onSubmit(values)}
            validationSchema={validationsSchemaLog}>
            {({
                  touched,
                  errors,
                  isValid,
                  handleSubmit,
                  dirty
              }) => (
                <div className='logged'>
                    <Form onSubmit={handleSubmit}>
                        <h3>Вход</h3>
                        <div>
                            <FormikControl
                                placeholder='Введите E-mail'
                                control='input'
                                name='email'
                                label='Логин'
                                touched={touched.email}
                                errors={errors.email}/>
                            <FormikControl
                                control='input'
                                name='password'
                                placeholder='Введите пароль'
                                label='Пароль'
                                touched={touched.password}
                                errors={errors.password}/>
                        </div>
                        <div className='btn-login'>
                            <UseButton
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                nameBut={'Войти'}
                                type='submit'/>
                        </div>
                        <div className='go-to-reg'>
                            <Link to='/registration'>Зарегистрироваться</Link>
                        </div>
                    </Form>
                </div>
            )
            }
        </Formik>
    )
}

const mapStateToProps = ({logged}) => {
    return {
        logged
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (value) => dispatch(onLogSelected(value)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Logged)