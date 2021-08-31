import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {FieldArray, Form, Formik, useFormikContext} from "formik";
import * as yup from "yup";

import './add-car-item.scss'

import {carAddedToTable, onRedoProperty} from "../../actions";
import FormikControl from "../form-components/FormikControl";

const AutoUseProperty = ({use}) => {
    const {values} = useFormikContext();
    switch (use) {
        case 'color':
            return <FormikControl control='input'
                                  label='Значение'
                                  name='color'
                                  placeholder='red'
                                  value={values.color}/>
        case 'fuel' :
            return <FormikControl control='input'
                                  label='Значение'
                                  name='fuel'
                                  placeholder='бензин'
                                  value={values.fuel}/>
        case 'year' :
            return <FormikControl control='input'
                                  label='Значение'
                                  name='year'
                                  placeholder='Год выпуска'
                                  value={values.year}/>
        default:
            return null;
    }
}

const AddCarItem = ({onAddedToTable, car, editCar, onRedoProperty}) => {
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
        arrProperty: car.arrProperty || [{
            property: car.property || '',
        }],
        color: car.color || '',
        year: car.year || '',
        fuel: car.fuel || ''
    }

    const validationsSchemaLog = yup.object().shape({
        title: yup.string().typeError('string').required('*'),
        price: yup.number().typeError('number').required('*'),
        file: yup.string().typeError('string'),
        description: yup.string().typeError('string'),
        arrProperty: yup.array()
            .of(
                yup.object().shape({
                        property: yup.string().typeError('string'),
                    }
                )
            ),
        color: yup.string().typeError('string'),
        year: yup.string().typeError('string'),
        fuel: yup.string().typeError('string'),
    })

    return (
        <div className='add-car-item'>
            <Formik
                initialValues={initialValues}
                validateOnBlur
                onSubmit={editCar ? (values) => onRedoProperty(values) :
                    (values) => onAddedToTable(values)}
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
                            name='arrProperty'
                            render={arrayHelpers => (
                                <div className='add-prop'>
                                    <span>Дбавить свойство
                                        <button type="button" onClick={() => arrayHelpers.push({property: ''})}>
                                        +
                                        </button>
                                    </span>
                                    {(
                                        values.arrProperty.map((prop, index) => (
                                            <div key={index} className='added-prop'>
                                                <div>
                                                    <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                                        -
                                                    </button>
                                                </div>
                                                <FormikControl
                                                    control='select'
                                                    label={`Свойство ${index + 1}`}
                                                    // name={`property.${index}`}
                                                    name={'property'}
                                                    options={dropdownOptions}
                                                />
                                                <AutoUseProperty use={values.property}/>
                                                {console.log(values)}
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
