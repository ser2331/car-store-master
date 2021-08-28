import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Field, Form, Formik} from "formik";

import './add-car-item.scss'

import {carAddedToTable, onRedoProperty} from "../../actions";
import * as yup from "yup";
import Condition from "../condition";
import AddProperty from "../add-property";

const AddCarItem = ({onAddedToTable, car, editCar, onRedoProperty}) => {
    const initialValues = {
        title: '',
        price: '',
        file: '',
        description: '',

        addProperty: false,
        year: '',
        color: '',
        fuel: ''
    }
    const carInitialValues = {
        title: car.title,
        price: car.price,
        file: '',
        description: car.description,

        addProperty: false,
        year: car.year,
        color: car.color,
        fuel: ''
    }
    const validationsSchemaLog = yup.object().shape({
        title: yup.string().typeError('string').required('*'),
        price: yup.number().typeError('number').required('*'),
        file: yup.string().typeError('string'),
        description: yup.string().typeError('string'),
    })

    return (
        <div className='add-car-item'>
            <Formik
                initialValues={editCar ? carInitialValues : initialValues}
                validateOnBlur
                onSubmit={editCar ? (values) => onRedoProperty(values) :
                    (values) => onAddedToTable(values)}
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
                    <Form>
                        <div className='btn-choice'>
                            <NavLink to='/cars'>
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
                        <h3>Добавление товара</h3>
                        <p>Название товара
                            <Condition
                                errors={errors.title}
                                touched={touched.title}/>
                        </p>
                        <Field placeholder='Mercedes S550 4matic'
                               type='text'
                               name='title'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.title}/>
                        <p>Стоимость товара
                            <Condition
                                errors={errors.price}
                                touched={touched.price}/>
                        </p>
                        <Field placeholder='1113000'
                               type='number'
                               name='price'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.price}/>

                        <p>Изображение</p>
                        <Field placeholder='image'
                               type='text'
                               name='file'
                               onBlur={handleBlur}
                               onChange={handleChange}
                               value={values.file}/>
                        <p>Описание</p>
                        <textarea
                            name='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            placeholder='Не следует, однако забывать,
        что начало повседневной работы по формированию позиции требуют определения
        и уточнения существенных финансовых и административных условий.
        Разнообразный и богатый опыт консультация с широким активом
        способствует подготовки и реализации'/>

                       <AddProperty/>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        car: state.oneCar,
        editCar: state.editCar
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToTable: (value) => dispatch(carAddedToTable(value)),
        onRedoProperty: (value) => dispatch(onRedoProperty(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCarItem)
