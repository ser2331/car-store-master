import React, {Component} from "react";
import {connect} from "react-redux";

import {carRemovedFromTable, oneCarLoaded, onEditCar, setCurrentPage} from "../../actions/cars-actions";
import Table from "../table";

class CarsContainer extends Component {
    state = {
        sortName: false,
        sortPrice: false,
    }
    onSortName = () => {
        this.setState(({sortName}) => {
            return {
                sortName: !sortName,
                Name: true
            }
        })
    }
    onSortPrice = () => {
        this.setState(({sortPrice}) => {
            return {
                sortPrice: !sortPrice,
                Name: true
            }
        })
    }

    render() {
        const {
            cars, pageSize,
            currentPage, onCarSelected, onDelete,
            setCurrentPage, onEditCart, logged
        } = this.props
        let sortingName = [...cars.sort((a, b) => {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        })]
        let sortingNameReverse = [...cars.sort((a, b) => {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        }).reverse()]
        let sortingPrice = [...cars.sort((a, b) => {
            return a.price - b.price;
        })]
        let sortingPriceReverse = [...cars.sort((a, b) => {
            return a.price - b.price;
        }).reverse()]


        return (
            <Table items={this.state.sortName ? sortingName : sortingNameReverse}
                   pageSize={pageSize}
                   setCurrentPage={setCurrentPage}
                   currentPage={currentPage}
                   onCarSelected={onCarSelected}
                   onEditCart={onEditCart}
                   onDelete={onDelete}
                   tableName={'Перечень товаров'}
                   tablePrice={'Стоимость'}
                   tableData={'Дата изменения'}
                   onSortName={() => this.onSortName}
                   onSortPrice={() => this.onSortPrice}
                   sortName={this.state.sortName}
                   sortPrice={this.state.sortPrice}
                   logged={logged}
            />
        )
    }


}

const mapStateToProps = ({carsPage}) => {
    return {
        cars: carsPage.cars,
        pageSize: carsPage.pageSize,
        currentPage: carsPage.currentPage,
        logged: carsPage.logged,
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