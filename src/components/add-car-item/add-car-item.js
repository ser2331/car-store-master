import React, { useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Field, FieldArray, Form, Formik,
} from 'formik';
import * as yup from 'yup';
import * as PropTypes from 'prop-types';
import { useAlert } from 'react-alert';
import {
    carAddedToTable,
    onRedoProperty,
    onReturn,
} from '../../actions/cars-actions';
import FormikControl from '../form-components/FormikControl';
import CaseInput from '../case-input/case-input';

import './add-car-item.scss';


const AddCarItem = ({
    onAddedToTable, car, onRedoProp, onBack, details, redirect, editCar,
}) => {
    const alert = useAlert();

    useEffect(() => () => {
        onBack();
    }, [onBack]);

    const initialValues = {
        title: car.title || '',
        price: car.price || '',
        file: car.file || '',
        description: car.description || '',
        moreDetails: car.moreDetails || [],
    };
    const validationsSchemaLog = yup.object().shape({
        title: yup.string().typeError('string').required('*'),
        price: yup.number().typeError('number').required('*'),
        file: yup.string().typeError('string'),
        description: yup.string().typeError('string'),
        moreDetails: yup.array().typeError('array'),
    });
    const onSubmit = (values) => {
        if (editCar) {
            return onRedoProp({ ...values, id: car.id }) && alert.success('Свойства отредактированны');
        }
        return onAddedToTable(values) && alert.success('Автомобиль добавлен');
    };

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <div className="AddCarItem container">
            <Formik
                initialValues={initialValues}
                validateOnBlur
                onSubmit={onSubmit}
                validationSchema={validationsSchemaLog}
            >
                {({
                    values,
                    touched,
                    errors,
                    isValid,
                    handleSubmit,
                    dirty,
                }) => (
                    <Form>
                        <div className="btn-choice">
                            <NavLink to="/">
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
                        <h3>Добавление товара</h3>
                        <FormikControl
                            control="input"
                            name="title"
                            placeholder="Mercedes S550 4matic"
                            label="Название товара"
                            errors={errors.title}
                            touched={touched.title}
                        />
                        <FormikControl
                            control="input"
                            name="price"
                            placeholder="1113000"
                            label="Стоимость товара"
                            errors={errors.price}
                            touched={touched.price}
                        />
                        <FormikControl
                            placeholder="image"
                            control="input"
                            name="file"
                            label="Изображение"
                        />
                        <FormikControl
                            control="textarea"
                            name="description"
                            label="Описание"
                            placeholder="Не следует, однако забывать,
        что начало повседневной работы по формированию позиции требуют определения
        и уточнения существенных финансовых и административных условий.
        Разнообразный и богатый опыт консультация с широким активом
        способствует подготовки и реализации"
                        />
                        <FieldArray
                            name="moreDetails"
                            render={(arrayHelpers) => (
                                <div className="add-prop">
                                    <span>
                                        Дбавление товару свойств
                                        <button
                                            type="button"
                                            disabled={values.moreDetails.length === details.length}
                                            onClick={() => arrayHelpers.push({
                                                name: '',
                                                value: '',
                                                dropValue: [{ meaning: '' }],
                                            })}
                                        >
                                            +
                                        </button>
                                    </span>
                                    {(
                                        values.moreDetails.map((prop, index) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <div key={index} className="added-prop">
                                                <div className="left-field">
                                                    <div>
                                                        <button
                                                            type="button"
                                                            onClick={() => arrayHelpers.remove(index)}
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <Field
                                                            as="select"
                                                            name={`moreDetails.${index}.name`}
                                                        >
                                                            {values.moreDetails[index].name
                                                                ? (<option label={values.moreDetails[index].name} />)
                                                                : (<option hidden value="0">Выберете свойство</option>)}
                                                            {
                                                                details.map((detail) => (values.moreDetails.find((item) => item.name === detail.key)
                                                                    ? null
                                                                    : (
                                                                        <option
                                                                            key={detail.id}
                                                                            value={detail.key}
                                                                        >
                                                                            {detail.key}
                                                                        </option>
                                                                    )
                                                                ))
                                                            }
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="right-field">
                                                    {values.moreDetails[index].name
                                                        ? (
                                                            <CaseInput
                                                                use={details.find((el) => el.key === values.moreDetails[index].name)?.value}
                                                                value={`moreDetails.${index}.value`}
                                                                dropValue={`moreDetails.${index}.dropValue`}
                                                                values={values.moreDetails[index].dropValue}
                                                            />
                                                        )
                                                        : null}
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};
const mapStateToProps = ({ carsPage, detailPage }) => ({
    idCar: carsPage.oneCar.id,
    details: detailPage.details,
    car: carsPage.oneCar,
    editCar: carsPage.editCar,
    redirect: carsPage.redirect,
});
const mapDispatchToProps = (dispatch) => ({
    onAddedToTable: (value) => dispatch(carAddedToTable(value)),
    onRedoProp: (value) => dispatch(onRedoProperty(value)),
    onBack: () => dispatch(onReturn()),
});
AddCarItem.propTypes = {
    onAddedToTable: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    car: PropTypes.object,
    editCar: PropTypes.bool,
    onRedoProp: PropTypes.func,
    onBack: PropTypes.func,
    details: PropTypes.arrayOf(PropTypes.object),
    redirect: PropTypes.bool,
};
AddCarItem.defaultProps = {
    onAddedToTable: () => {},
    car: {},
    onRedoProp: () => {},
    onBack: () => {},
    details: [],
    redirect: false,
    editCar: false,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCarItem);
