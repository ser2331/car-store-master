import React from "react";

import './condition.scss'
const Condition = ({touched, errors}) => {
    let classNames = 'star'
    if (touched && errors) {
        classNames += ' error'
    }
    return <sup className={classNames}>*</sup>
}
export default Condition