import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Field, FieldArray, Form, Formik} from "formik";
import * as yup from "yup";

import './add-car-item.scss'

import {carAddedToTable, onRedoProperty, onReturn} from "../../actions/cars-actions";
import FormikControl from "../form-components/FormikControl";
import CaseInput from "../case-input/case-input";
import {useAlert} from "react-alert";

const AddCarItem = ({onAddedToTable, car, editCar, onRedoProperty, onReturn, details}) => {
    const alert = useAlert();
    useEffect(() => {
        return () => {
            onReturn()
        }
    }, [onReturn])

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
            return onRedoProperty({...values, id: car.id}) && alert.success("Свойства отредоктированны")
        } else {
            return onAddedToTable(values) && alert.success("Автомобиль добавлен")
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
                            <NavLink to='/'>
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
                                    <span>Дбавление товару свойств
                                        <button type="button" onClick={() => arrayHelpers.push({name: '', value: '', dropValue:[]})}>
                                        +
                                        </button>
                                    </span>
                                    {(
                                        values.moreDetails.map((prop, index) => (
                                            <div key={index} className='added-prop'>
                                                <div className='left-field'>
                                                    <div>
                                                        <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                                            -
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <Field as='select'
                                                               name={`moreDetails.${index}.name`}>
                                                            {values.moreDetails[index].name ?
                                                                (<option label={values.moreDetails[index].name}/>) :
                                                                (<option hidden value='0'>Выберете свойство</option>)}
                                                            {details.map(detail =>
                                                                (values.moreDetails.find((item) => item.name === detail.key) ?
                                                                        null :
                                                                        <option key={detail.id}
                                                                                value={detail.key}>
                                                                            {detail.key}
                                                                        </option>
                                                                ))}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className='right-field'>
                                                    {values.moreDetails[index].name ?
                                                        <CaseInput
                                                            use={details.find((el) => el.key === values.moreDetails[index].name)?.value}
                                                            value={`moreDetails.${index}.value`}
                                                            dropValue={`moreDetails.${index}.dropValue`}
                                                            values={values.moreDetails[index].dropValue}/>
                                                        : null}
                                                </div>
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
const mapStateToProps = ({carsPage, detailPage}) => {
    return {
        details: detailPage.details,
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