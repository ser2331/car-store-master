import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import './car-item.scss'

import UseButton from "../use-button";
import image from '../layers/unnamed.jpg'

const CarItem = ({car}) => {
    const {title, year, fuel, price, coverImage, description} = car
    return (
        <div className='car-item'>
            <NavLink to='/cars'>Вернуться</NavLink>
            <div className='property'>
                <hr/>
                <div className='property-car'>
                    <img src={coverImage ? coverImage : image} alt='car' className='car-img'/>
                    <div className='property-info'>
                        <h2>{title}</h2>
                        <div className='description'>{description}</div>
                    </div>
                </div>
            </div>

            <div className='property-form'>
                <div>
                    <p>Цвет авто</p>

                </div>
                <div>
                    <p>Год выпуска</p>
                    <span>{year}</span>
                </div>
                <div>
                    <p>Вид топлива</p>
                    <span>{fuel}</span>
                </div>
                <div>
                    <p>Стоимость</p>
                    <p>{price}$</p>
                </div>
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
const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CarItem)


