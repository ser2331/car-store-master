import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAlert } from 'react-alert';
import * as PropTypes from 'prop-types';
import UseButton from '../use-button';
import image from '../layers/unnamed.jpg';
import { onReturn } from '../../actions/cars-actions';
import './car-item.scss';

const CarItem = ({ car, onExit }) => {
    const {
        title, price, file, description, moreDetails,
    } = car;
    const alert = useAlert();
    useEffect(() => () => {
        onExit();
    }, [onExit]);
    return (
        <div className="car-item">
            <div className="exit">
                <NavLink to="/">
                    <span>Вернуться</span>
                </NavLink>
            </div>
            <hr />
            <div className="property">

                <div className="property-car">
                    <img src={file || image} alt="car" className="car-img" />
                    <div className="property-info">
                        <h2>{title}</h2>
                        <div className="description">{description}</div>
                    </div>
                </div>
            </div>
            <div className="property-form">
                {moreDetails ? moreDetails.map((proper) => (
                    <div key={proper.name}>
                        <p>{proper.name}</p>
                        {
                            proper.value ? (
                                <span>{proper.value}</span>
                            ) : (

                                <span>
                                    <select>
                                        {proper.dropValue.map((option) => (
                                            <option key={option.meaning}>
                                                {option.meaning}
                                            </option>
                                        ))}
                                    </select>
                                </span>
                            )
                        }
                    </div>
                )) : null}
                <div>
                    <p>Цена</p>
                    <span className="price">
                        {`${price.toLocaleString()} $`}
                    </span>
                </div>
                <div className="btn-buy">
                    <UseButton
                        nameBut="Беру!!!!"
                        onClickButton={() => {
                            alert.success('Добавлено в карзину');
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = ({ carsPage }) => ({
    car: carsPage.oneCar,
});
const mapDispatchToProps = (dispatch) => ({
    onExit: () => dispatch(onReturn()),
});
CarItem.propTypes = {
    car: {},
    onExit: () => {},
};
CarItem.defaultProps = {
    car: PropTypes.array,
    onExit: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(CarItem);
