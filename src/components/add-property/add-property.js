import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { NavLink, Redirect } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useAlert } from 'react-alert';
import './add-property.scss';
import * as PropTypes from 'prop-types';
import FormikControl from '../form-components/FormikControl';
import { onAddedPropToTable, onReturn } from '../../actions/property-actions';

const AddProperty = ({
    onAddedProp, details, redirect, onBack,
}) => {
    const alert = useAlert();

    useEffect(() => () => {
        onBack();
    }, [onBack]);

    const radioOptions = [
        { key: 'Dropdown', value: 'dropdown' },
        { key: 'Number', value: 'number' },
        { key: 'String', value: 'string' },
    ];

    const initialValues = {
        key: '',
        value: '',
    };

    const validationsSchemaLog = yup.object().shape({
        key: yup.string().typeError('string').required('*'),
        value: yup.string().typeError('string').required('*'),
    });

    const onSubmit = (values) => {
        if (details.find(({ key }) => key.toLowerCase() === values.key.toLowerCase())) {
            return alert.error('Такое свойство уже добавлено');
        }
        return onAddedProp(values) && alert.success('Свойство добавлено');
    };

    if (redirect) {
        return <Redirect to="/details" />;
    }

    return (
        <div className="add-prop-item">
            <Formik
                initialValues={initialValues}
                validationSchema={validationsSchemaLog}
                validateOnBlur
                onSubmit={onSubmit}
            >
                {({
                    touched,
                    errors,
                    handleSubmit,
                    isValid,
                    dirty,
                }) => (
                    <Form>
                        <div className="btn-choice">
                            <NavLink to="/details">
                                <button
                                    className="btn-back"
                                    type="button"
                                >
                                    Вернуться
                                </button>
                            </NavLink>
                            <div>
                                <button
                                    className="btn-save"
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type="button"
                                >
                                    Сохранить
                                </button>
                            </div>
                        </div>
                        <h3>Добавление свойств</h3>
                        <div className="name-prop">
                            <FormikControl
                                control="input"
                                name="key"
                                placeholder="Цвет авто"
                                label="Название свойства"
                                errors={errors.key}
                                touched={touched.key}
                            />
                        </div>
                        <div className="radio-btn">
                            <FormikControl
                                control="radio"
                                name="value"
                                label="Укажите тип свойства"
                                errors={errors.value}
                                touched={touched.value}
                                options={radioOptions}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
const mapStateToProps = ({ detailPage }) => ({
    details: detailPage.details,
    redirect: detailPage.redirect,
});
const mapDispatchToProps = (dispatch) => ({
    onAddedProp: (value) => dispatch(onAddedPropToTable(value)),
    onBack: () => dispatch(onReturn()),
});
AddProperty.propTypes = {
    details: PropTypes.arrayOf(PropTypes.object),
    onAddedProp: PropTypes.func,
    redirect: PropTypes.bool,
    onBack: PropTypes.func,
};
AddProperty.defaultProps = {
    details: [],
    onAddedProp: () => {},
    redirect: false,
    onBack: () => {},
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);
