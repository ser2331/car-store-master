import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {FieldArray, Form, Formik} from "formik";
import * as yup from "yup";

import './add-car-item.scss'

import {carAddedToTable, onRedoProperty, onReturn} from "../../actions/cars-actions";
import FormikControl from "../form-components/FormikControl";

const AddCarItem = ({onAddedToTable, car, editCar, onRedoProperty, onReturn}) => {
    useEffect(() => {
        return () => {
            onReturn()
        }
    }, [onReturn])
    const dropdownOptions = [
        {key: 'Выберете свойство', value: ''},
        {key: 'Цвет', value: 'color'},
        {key: 'Тип топлива', value: 'fuel'},
        {key: 'Год выпуска', value: 'year'}
    ]
    const initialValues = {
        title: car.title || '',
        price: car.price || '',
        file: car.file || '',
        description: car.description || '',
        moreDetails: car.moreDetails || [],
    }
    const validationsSchemaLog = yup.object().shape({
        title: yup.string().typeError('string').required('*'),
        price: yup.number().typeError('number').required('*'),
        file: yup.string().typeError('string'),
        description: yup.string().typeError('string'),
        moreDetails: yup.array()
    })
    const onSubmit = (values) => {
        if (editCar) {
            console.log(editCar)
            return onRedoProperty({...values, id: car.id})
        } else {
            return onAddedToTable(values)
        }
    }
    return (
        <div className='add-car-item'>
            <Formik
                initialValues={initialValues}
                validateOnBlur
                onSubmit={onSubmit}
                validationSchema={validationsSchemaLog}>
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
                        <FormikControl
                            control='input'
                            name='title'
                            placeholder='Mercedes S550 4matic'
                            label='Название товара'
                            errors={errors.title}
                            touched={touched.title}
                        />
                        <FormikControl
                            control='input'
                            name='price'
                            placeholder='1113000'
                            label='Стоимость товара'
                            errors={errors.price}
                            touched={touched.price}
                        />
                        <FormikControl
                            placeholder='image'
                            control='input'
                            name='file'
                            label='Изображение'
                        />
                        <FormikControl
                            control='textarea'
                            name='description'
                            label='Описание'
                            placeholder='Не следует, однако забывать,
        что начало повседневной работы по формированию позиции требуют определения
        и уточнения существенных финансовых и административных условий.
        Разнообразный и богатый опыт консультация с широким активом
        способствует подготовки и реализации'/>
                        <FieldArray
                            name='moreDetails'
                            render={arrayHelpers => (
                                <div className='add-prop'>
                                    <span>Дбавить свойство
                                        <button type="button" onClick={() => arrayHelpers.push({name: '', value: ''})}>
                                        +
                                        </button>
                                    </span>
                                    {(
                                        values.moreDetails.map((prop, index) => (
                                            <div key={index} className='added-prop'>
                                                <div>
                                                    <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                                        -
                                                    </button>
                                                </div>
                                                <FormikControl
                                                    control='select'
                                                    label={`Свойство ${index + 1}`}
                                                    name={`moreDetails.${index}.name`}
                                                    options={dropdownOptions}
                                                />
                                                {values.moreDetails[index].name ?
                                                    <FormikControl control='input'
                                                                   label='Значение'
                                                                   name={`moreDetails.${index}.value`}/> : null}
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}/>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
const mapStateToProps = ({carsPage}) => {
    return {
        car: carsPage.oneCar,
        editCar: carsPage.editCar
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToTable: (value) => dispatch(carAddedToTable(value)),
        onRedoProperty: (value) => dispatch(onRedoProperty(value)),
        onReturn: () => dispatch(onReturn()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCarItem)