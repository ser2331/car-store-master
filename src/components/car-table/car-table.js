import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import './car-table.scss'

import UseButton from "../use-button";
import {carRemovedFromTable, oneCarLoaded, onEditCar, setCurrentPage} from "../../actions";
import Pagination from "../pagination";

const CarTable = ({
                      cars, pageSize,
                      currentPage, onCarSelected, onDelete,
                      setCurrentPage, onEditCart,
                  }) => {
    let carsPage = cars.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    const renderRow = (car) => {
        const {id, title, changeData, price,} = car
        const idx = Math.random()
        return (
            <tr key={idx}>

                <td onClick={() => onCarSelected(id)}>
                    <Link to={`/cars/item${id}`}>
                        {title}
                    </Link>
                </td>
                <td>{price}$</td>
                <td>{changeData}</td>
                <td>
                    <Link to={`/add-item`} onClick={() => onEditCart(id)}>
                        <span>Ред.</span>
                    </Link>
                    <span onClick={() => onDelete(id)}>Удалить</span>
                </td>
            </tr>
        )
    }
    return (
        <div className='car-table'>
            <Link className='btn-add'
                  to='/add-item'>
                <UseButton
                    nameBut='Добавить товар'
                    onClickButton={() => {
                        console.log('Добавить')
                    }}/>
            </Link>
            <table className='table'>
                <thead>
                <tr>
                    <th>Перечень товаров</th>
                    <th>Стоимость</th>
                    <th>Дата изменения</th>
                    <th>Управление</th>
                </tr>
                </thead>
                <tbody>
                {carsPage.map(renderRow)}
                </tbody>
            </table>
            <Pagination cars={cars}
                        pageSize={pageSize}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}/>
        </div>
    )
}
const mapStateToProps = ({cars, pageSize, currentPage,oneCar}) => {
    return {
        cars,
        pageSize,
        currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(carRemovedFromTable(id)),
        onCarSelected: (id) => dispatch(oneCarLoaded(id)),
        setCurrentPage: (p) => dispatch(setCurrentPage(p)),
        onEditCart: (id) => dispatch(onEditCar(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarTable)
