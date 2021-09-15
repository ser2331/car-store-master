import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import {
    carRemovedFromTable,
    oneCarLoaded,
    onEditCar,
    setCurrentPage,
} from '../../actions/cars-actions';
import Table from '../table';

class CarsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortName: false,
        };
    }

    onSortName = () => {
        this.setState(({ sortName }) => ({
            sortName: !sortName,
        }));
    }

    // onSortPrice = () => {
    //     this.setState(({ sortPrice }) => ({
    //         sortPrice: !sortPrice,
    //     }));
    // }

    render() {
        const {
            cars,
            pageSize,
            currentPage,
            onCarSelected,
            onDelete,
            setPage,
            onEditCart,
            logged,
            editCar,
        } = this.props;
        const { sortName } = this.state;
        const sortingName = [...cars.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))];
        const sortingNameReverse = [...cars.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())).reverse()];
        // const sortingPrice = [...cars.sort((a, b) => a.price - b.price)];
        // const sortingPriceReverse = [...cars.sort((a, b) => a.price - b.price).reverse()];

        return (
            <Table
                items={sortName ? sortingName : sortingNameReverse}
                pageSize={pageSize}
                setCurrentPage={setPage}
                currentPage={currentPage}
                onCarSelected={onCarSelected}
                onEditCart={onEditCart}
                onDelete={onDelete}
                tableName="Перечень товаров"
                tablePrice="Стоимость"
                tableData="Дата изменения"
                onSortName={() => this.onSortName}
                // onSortPrice={() => this.onSortPrice}
                sortName={sortName}
                logged={logged}
                editCar={editCar}
            />
        );
    }
}

const mapStateToProps = ({ carsPage }) => ({
    cars: carsPage.cars,
    pageSize: carsPage.pageSize,
    currentPage: carsPage.currentPage,
    logged: carsPage.logged,
    editCar: carsPage.editCar,
});
const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => dispatch(carRemovedFromTable(id)),
    onCarSelected: (id) => dispatch(oneCarLoaded(id)),
    setPage: (p) => dispatch(setCurrentPage(p)),
    onEditCart: (id) => dispatch(onEditCar(id)),
});
CarsContainer.propTypes = {
    cars: [],
    pageSize: 0,
    currentPage: 0,
    onCarSelected: () => {},
    onDelete: () => {},
    setPage: () => {},
    onEditCart: () => {},
    logged: false,
    editCar: true,
};
CarsContainer.defaultProps = {
    cars: PropTypes.array,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onCarSelected: PropTypes.func,
    onDelete: PropTypes.func,
    setPage: PropTypes.func,
    onEditCart: PropTypes.func,
    logged: PropTypes.bool,
    editCar: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer);
