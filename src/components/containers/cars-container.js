import React from "react";
import {connect} from "react-redux";

import {carRemovedFromTable, oneCarLoaded, onEditCar, setCurrentPage} from "../../actions/cars-actions";
import Table from "../table";

const CarsContainer = ({
                           cars, pageSize,
                           currentPage, onCarSelected, onDelete,
                           setCurrentPage, onEditCart,

                       }) => {
    console.log(cars)
    return (
        <Table items={cars}
               pageSize={pageSize}
               setCurrentPage={setCurrentPage}
               currentPage={currentPage}
               onCarSelected={onCarSelected}
               onEditCart={onEditCart}
               onDelete={onDelete}
               tableName={'Перечень товаров'}
               tablePrice={'Стоимость'}
               tableData={'Дата изменения'}
        />
    )
}
const mapStateToProps = ({carsPage, detailPage}) => {
    return {
        cars: carsPage.cars,
        pageSize: carsPage.pageSize,
        currentPage: carsPage.currentPage,
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
export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer)