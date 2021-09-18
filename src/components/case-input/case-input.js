import React from 'react';
import * as PropTypes from 'prop-types';
import { FieldArray } from 'formik';
import FormikControl from '../form-components/FormikControl';
import './case-input.scss';

const CaseInput = (props) => {
    const {
        use, value, values, dropValue,
    } = props;
    switch (use) {
    case 'dropdown':
        return (
            <div className="case-input-arr">
                <p>Значение</p>
                <div className="field-arr">
                    <FieldArray
                        name={dropValue}
                        render={(arrayHelpers) => (
                            <div>
                                {(
                                    values.map((prop, index) => (
                                        // eslint-disable-next-line react/no-array-index-key
                                        <div key={index} className=" add-prop-field">
                                            <div>
                                                <FormikControl
                                                    control="input"
                                                    name={`${dropValue}.${index}.meaning`}
                                                />
                                            </div>
                                            <div>
                                                <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                                <span>
                                    <button type="button" onClick={() => arrayHelpers.push({ meaning: '' })}>
                                        +
                                    </button>
                                </span>
                            </div>
                        )}
                    />
                </div>
            </div>
        );
    case 'number':
        return (
            <FormikControl
                control="input"
                label="Значение"
                name={value}
                type="number"
            />
        );
    case 'string':
        return (
            <FormikControl
                control="input"
                label="Значение"
                name={value}
            />
        );
    default:
        return null;
    }
};
CaseInput.propTypes = {
    use: PropTypes.string,
    value: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.object),
    dropValue: PropTypes.string,
};
CaseInput.defaultProps = {
    use: '',
    value: '',
    values: [],
    dropValue: '',
};
export default CaseInput;
