import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import './car-item.scss'

import UseButton from "../use-button";
import image from '../layers/unnamed.jpg'
import {onReturn} from "../../actions";

const CarItem = ({car, onReturn}) => {
    const OneProp = ({prop, label}) => {
        if (prop) {
            return (
                <div>
                    <p>{label}</p>
                    <span>{prop}</span>
                </div>
            )
        } else
            return null
    }
    const {title, year, fuel, price, file, description, color} = car
    return (
        <div className='car-item'>
            <NavLink to='/cars'>
                <span onClick={() => onReturn()}>Вернуться</span>
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
                <OneProp prop={color} label={'Цвет авто'}/>
                <OneProp prop={year} label={'Год выпуска'}/>
                <OneProp prop={fuel} label={'Вид топлива'}/>
                <OneProp prop={price} label={'Стоимость'}/>
                <div className='btn-buy'>
                    <UseButton
                        nameBut='Беру!!!!'
                        onClickButton={() => {
                            console.log('Беру')
                        }}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {car: state.oneCar}
}
const mapDispatchToProps = (dispatch) => {
    return {
        onReturn: () => dispatch(onReturn()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarItem)


