import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';
import * as PropTypes from 'prop-types';
import Types from "../../services/types";
import UseButton from '../use-button';
import { onLogSelected } from '../../actions/cars-actions';
import FormikControl from '../form-components/FormikControl';

import './login.scss';

const { routingMap } = Types;

const Login = ({ login, onSubmit }) => {
    const alert = useAlert();
    const history = useHistory();
    const validationsSchemaLog = yup.object().shape({
        password: yup.string().typeError('string').required('*'),
        email: yup.string().email('Введите верный email').required('*'),
    });

    const submit = (values) => onSubmit(values) && alert.success('Авторизация успешна');

    useEffect(() => {
        if (login) {
            history.push(routingMap.get('location').path)
        }
    }, [login, history]);

    return (
        <div className="Login-wrapper">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validateOnBlur
                onSubmit={submit}
                validationSchema={validationsSchemaLog}
            >
                {({
                      touched,
                      errors,
                      isValid,
                      handleSubmit,
                      dirty,
                  }) => (
                    <div className="Login container-registration">
                        <Form onSubmit={handleSubmit}>
                            <h3 className="Login__title">Вход</h3>
                            <div>
                                <FormikControl
                                    placeholder="Введите E-mail"
                                    control="input"
                                    name="email"
                                    label="Логин"
                                    labelStyle="label"
                                    className="Registration-field"
                                    touched={touched.email}
                                    errors={errors.email}
                                />
                                <FormikControl
                                    control="input"
                                    name="password"
                                    placeholder="Введите пароль"
                                    label="Пароль"
                                    labelStyle="label"
                                    className="Registration-field"
                                    touched={touched.password}
                                    errors={errors.password}
                                />
                            </div>
                            <div className="Login__btn-login">
                                <UseButton
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    nameBut="Войти"
                                    isSubmit
                                />
                            </div>
                            <div className="Login__registration-link">
                                <Link to={routingMap.get('registration').path}>Зарегистрироваться</Link>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};
const mapStateToProps = ({ carsPage }) => ({
    login: carsPage.login,
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (value) => dispatch(onLogSelected(value)),
});

Login.propTypes = {
    login: PropTypes.bool,
    onSubmit: PropTypes.func,
};
Login.defaultProps = {
    login: false,
    onSubmit: () => {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
