import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import UseButton from '../use-button';
import { onLogSelected } from '../../actions/cars-actions';
import FormikControl from '../form-components/FormikControl';
import './logged.scss';

const Logged = ({ logged, onSubmit }) => {
    const validationsSchemaLog = yup.object().shape({
        password: yup.string().typeError('string').required('*'),
        email: yup.string().email('Введите верный email').required('*'),
    });
    if (logged) {
        return <Redirect to="/" />;
    }
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validateOnBlur
            onSubmit={(values) => onSubmit(values)}
            validationSchema={validationsSchemaLog}
        >
            {({
                touched,
                errors,
                isValid,
                handleSubmit,
                dirty,
            }) => (
                <div className="logged">
                    <Form onSubmit={handleSubmit}>
                        <h3>Вход</h3>
                        <div>
                            <FormikControl
                                placeholder="Введите E-mail"
                                control="input"
                                name="email"
                                label="Логин"
                                touched={touched.email}
                                errors={errors.email}
                            />
                            <FormikControl
                                control="input"
                                name="password"
                                placeholder="Введите пароль"
                                label="Пароль"
                                touched={touched.password}
                                errors={errors.password}
                            />
                        </div>
                        <div className="btn-login">
                            <UseButton
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                nameBut="Войти"
                                type="submit"
                            />
                        </div>
                        <div className="go-to-reg">
                            <Link to="/registration">Зарегистрироваться</Link>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
};
const mapStateToProps = ({ carsPage }) => ({
    logged: carsPage.logged,
});
const mapDispatchToProps = (dispatch) => ({
    onSubmit: (value) => dispatch(onLogSelected(value)),
});
Logged.propTypes = {
    logged: false,
    onSubmit: () => {},
};
Logged.defaultProps = {
    logged: PropTypes.bool,
    onSubmit: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Logged);
