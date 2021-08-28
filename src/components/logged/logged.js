import React from "react";
import {Link, Redirect} from "react-router-dom";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import {connect} from "react-redux";

import './logged.scss'

import UseButton from "../use-button";
import {onLogSelected} from "../../actions";
import Condition from "../condition";


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
            onSubmit={(values)=>props.onSubmit(values)}
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
                <div className='logged'>
                    <Form onSubmit={handleSubmit}>
                        <h3>Вход</h3>
                        <div>
                            <p>
                                <label htmlFor='email'>Логин</label>
                                <Condition
                                    errors={errors.email}
                                    touched={touched.email}/>
                                <br/>
                                <Field placeholder='Введите E-mail'
                                       type='email'
                                       name='email'
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.login}/>
                            </p>
                            <p>
                                <label htmlFor='password'>Пароль</label>
                                <Condition
                                    errors={errors.password}
                                    touched={touched.password}/>
                                <br/>
                                <Field placeholder='Введите пароль'
                                       type='text'
                                       name='password'
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}/>
                            </p>
                        </div>
                        <div className='btn-login'>
                            <UseButton
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                nameBut={'Войти'}
                                type='submit'/>
                        </div>
                        <div className='registration'>
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