import React from "react";
import {connect} from "react-redux";

import './add-property.scss'
import { Form, Formik} from "formik";
import {NavLink} from "react-router-dom";
import FormikControl from "../form-components/FormikControl";

const AddProperty = () => {
    return (
        <div className='add-car-item'>
            <Formik
                validateOnBlur
                onSubmit={()=>{}}>
                {({
                      values,
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
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}>
                                Сохранить
                            </button>
                        </div>
                        <h3>Добавление свойств</h3>
                        <FormikControl
                            control='input'
                            name='title'
                            placeholder='Цвет авто'
                            label='Название товара'
                            errors={errors.title}
                            touched={touched.title}
                        />
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
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProperty)