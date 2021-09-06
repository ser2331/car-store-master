import React from "react";
import {connect} from "react-redux";
import * as yup from "yup";
import {NavLink} from "react-router-dom";
import {Form, Formik} from "formik";
import {useAlert} from "react-alert";

import './add-property.scss'

import FormikControl from "../form-components/FormikControl";
import {onAddedPropToTable} from "../../actions/property-actions";

const AddProperty = ({onAddedPropToTable}) => {
    const alert = useAlert();
    const radioOptions = [
        {key: 'Dropdown', value: 'dropdown'},
        {key: 'Number', value: 'number'},
        {key: 'String', value: 'string'}
    ]
    const initialValues = {
        key: '',
        value: ''
    }
    const validationsSchemaLog = yup.object().shape({
        key: yup.string().typeError('string').required('*'),
        value: yup.string().typeError('string').required('*'),
    })
    const onSubmit = (values) => {
        if(values){
            return onAddedPropToTable(values) && alert.success("Свойство добавлено")
        }
    }

    return (
        <div className='add-prop-item'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationsSchemaLog}
                validateOnBlur
                onSubmit={onSubmit}>
                {({
                      touched,
                      errors,
                      isValid,
                      handleSubmit,
                      dirty
                  }) => (
                    <Form>
                        <div className='btn-choice'>
                            <NavLink to='/details'>
                                <button
                                    className='btn-back'
                                    type='button'>
                                    Вернуться
                                </button>
                            </NavLink>
                            <button
                                className='btn-save'
                                type='submit'
                                onClick={handleSubmit}>
                                Сохранить
                            </button>
                        </div>
                        <h3>Добавление свойств</h3>
                        <div className='name-prop'>
                            <FormikControl
                                control='input'
                                name='key'
                                placeholder='Цвет авто'
                                label='Название свойства'
                                errors={errors.key}
                                touched={touched.key}
                            />
                        </div>
                        <div className='radio-btn'>
                            <FormikControl
                                control='radio'
                                name='value'
                                label='Укажите тип свойства'
                                errors={errors.value}
                                touched={touched.value}
                                options={radioOptions}
                            />
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddedPropToTable: (value) => dispatch(onAddedPropToTable(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProperty)