import React, {useEffect} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import './car-item.scss'

import UseButton from "../use-button";
import image from '../layers/unnamed.jpg'
import {onReturn} from "../../actions/cars-actions";
import {useAlert} from "react-alert";

const CarItem = ({car, onReturn}) => {
    const alert=useAlert()
    useEffect(() => {
        return () => {
            onReturn()
        }
    }, [onReturn])
    const {title, price, file, description, moreDetails} = car
    return (
        <div className='car-item'>
            <NavLink to='/cars'>
                <span>Вернуться</span>
            </NavLink>
            <div className='property'>
                <hr/>
                <div className='property-car'>
                    <img src={file ? file : image} alt='car' className='car-img'/>
                    <div className='property-info'>
                        <h2>{title}</h2>
                        <div className='description'>{description}</div>
                    </div>
                </div>
            </div>
            <div className='property-form'>
                {moreDetails.length > 0 ? moreDetails.map((proper, index) => {
                    return (
                        <div key={index}>
                            <p>{proper.name}</p>
                            <span>{proper.value}</span>
                        </div>)
                }) : null}

                <div>
                    <p>Цена</p>
                    <span>{price}</span>
                </div>
                <div className='btn-buy'>
                    <UseButton
                        nameBut='Беру!!!!'
                        onClickButton={() => {
                            alert.success('Добавлено в карзину')
                        }}/>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({carsPage}) => {
    return {
        car: carsPage.oneCar
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onReturn: () => dispatch(onReturn()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CarItem)
