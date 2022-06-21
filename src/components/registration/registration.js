import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useAlert } from 'react-alert';
import * as PropTypes from 'prop-types';
import Types from "../../services/types";
import UseButton from '../use-button';
import { onRegSelected } from '../../actions/cars-actions';
import FormikControl from '../form-components/FormikControl';

import './registration.scss';

const { routingMap } = Types;


const Registration = ({ onSubmit, users }) => {
    const alert = useAlert();
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Значение должно быть строкой').required('*'),
        secondName: yup.string().typeError('string').required('*'),
        password: yup.string().typeError('string').required('*'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пороли не совпадают').required('*'),
        email: yup.string().email('Введите верный email').required('Введите верный email'),
    });
    const submit = (values) => onSubmit(values) && alert.success('Регистрация успешна');
    return (
        <div className="Login-wrapper">
            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                }}
                validateOnBlur
                onSubmit={submit}
                validationSchema={validationsSchema}
            >
                {({
                      values,
                      touched,
                      errors,
                      isValid,
                      handleSubmit,
                      dirty,
                  }) => (
                    <div className="Registration container-registration">
                        {
                            users.find((el) => el.email === values.email) ? (
                                <Redirect to={routingMap.get('login').path} />
                            ) : null
                        }
                        <Form onSubmit={handleSubmit}>
                            <h3 className="Login__title">Регистрация</h3>

                            <div>
                                <FormikControl
                                    touched={touched.name}
                                    errors={errors.name}
                                    label="Имя"
                                    labelStyle="label"
                                    className="Registration-field"
                                    placeholder="Введите имя"
                                    control="input"
                                    name="name"
                                />
                                <FormikControl
                                    placeholder="Введите фамилию"
                                    control="input"
                                    label="Фамилия"
                                    labelStyle="label"
                                    className="Registration-field"
                                    touched={touched.secondName}
                                    errors={errors.secondName}
                                    name="secondName"
                                />
                                <FormikControl
                                    placeholder="Введите E-mail"
                                    control="input"
                                    name="email"
                                    label="E-mail"
                                    labelStyle="label"
                                    className="Registration-field"
                                    touched={touched.email}
                                    errors={errors.email}
                                />
                                <FormikControl
                                    placeholder="Введите пароль"
                                    control="input"
                                    name="password"
                                    label="Пароль"
                                    labelStyle="label"
                                    className="Registration-field"
                                    touched={touched.password}
                                    errors={errors.password}
                                />
                                <FormikControl
                                    placeholder="Введите пароль"
                                    control="input"
                                    name="confirmPassword"
                                    label="Подтвердите пароль"
                                    labelStyle="label"
                                    className="Registration-field"
                                    touched={touched.confirmPassword}
                                    errors={errors.confirmPassword}
                                />
                            </div>
                            <div className="btn-reg">
                                <UseButton
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    nameBut="Зарегистрироваться"
                                    isSubmit
                                />
                            </div>
                            <div className="return">
                                <Link to={routingMap.get('login').path}>Вернуться</Link>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};
const mapStateToProps = ({ carsPage }) => ({
    users: carsPage.users,
});
const mapDispatchToProps = (dispatch) => ({
    onSubmit: (value) => dispatch(onRegSelected(value)),
});
Registration.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    onSubmit: PropTypes.func,
};
Registration.defaultProps = {
    users: [],
    onSubmit: () => () => {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
