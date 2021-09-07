import React, {Component} from "react";
import {connect} from "react-redux";

import {carRemovedFromTable, oneCarLoaded, onEditCar, setCurrentPage} from "../../actions/cars-actions";
import Table from "../table";

class CarsContainer extends Component {
    state = {
        sort: true
    }
    onSortArrRevers = () => {
        this.setState(({sort})=>{
            return{
                sort:!sort
            }
        })
    }
    render() {
        const {
            cars, pageSize,
            currentPage, onCarSelected, onDelete,
            setCurrentPage, onEditCart,
        } = this.props
        let sortArr = [...cars.sort((a, b) => {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        })]
        let newArr = [...cars.sort((a, b) => {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        }).reverse()]

        return (
            <Table items={this.state.sort? sortArr:newArr}
                   pageSize={pageSize}
                   setCurrentPage={setCurrentPage}
                   currentPage={currentPage}
                   onCarSelected={onCarSelected}
                   onEditCart={onEditCart}
                   onDelete={onDelete}
                   tableName={'Перечень товаров'}
                   tablePrice={'Стоимость'}
                   tableData={'Дата изменения'}
                   onSort={() => this.onSortArrRevers}
                   sort={this.state.sort}
            />
        )
    }


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
        onEditCart: (id) => dispatch(onEditCar(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer)