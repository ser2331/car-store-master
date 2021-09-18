import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import {
    carRemovedFromTable,
    oneCarLoaded,
    onEditCar,
    onSort,
    setCurrentPage,
} from '../../actions/cars-actions';
import Table from '../table';

class CarsContainer extends Component {
    sorting = (cars, sortName) => {
        switch (sortName) {
        case 'name':
            return cars.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        case 'name-reverse':
            return cars.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())).reverse();
        case 'price':
            return cars.sort((a, b) => a.price - b.price);
        case 'price-reverse':
            return cars.sort((a, b) => a.price - b.price).reverse();
        case 'data':
            return cars.sort((a, b) => (a.data) - (b.data));
        case 'data-reverse':
            return cars.sort((a, b) => (a.data) - (b.data)).reverse();
        default:
            return cars;
        }
    };

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
            onSortElements,
            sortName,
        } = this.props;
        const visibleItems = this.sorting(cars, sortName);
        return (
            <Table
                items={visibleItems}
                pageSize={pageSize}
                setPage={setPage}
                currentPage={currentPage}
                onCarSelected={onCarSelected}
                onEditCart={onEditCart}
                onDelete={onDelete}
                tableName="Перечень товаров"
                tablePrice="Стоимость"
                tableData="Дата изменения"
                onSortElements={onSortElements}
                logged={logged}
                sortName={sortName}
            />
        );
    }
}

const mapStateToProps = ({ carsPage }) => ({
    cars: carsPage.cars,
    pageSize: carsPage.pageSize,
    currentPage: carsPage.currentPage,
    logged: carsPage.logged,
    sortName: carsPage.sortName,
});
const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => dispatch(carRemovedFromTable(id)),
    onCarSelected: (id) => dispatch(oneCarLoaded(id)),
    setPage: (p) => dispatch(setCurrentPage(p)),
    onEditCart: (id) => dispatch(onEditCar(id)),
    onSortElements: (sortType) => dispatch(onSort(sortType)),
});
CarsContainer.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.object),
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onCarSelected: PropTypes.func,
    onDelete: PropTypes.func,
    setPage: PropTypes.func,
    onEditCart: PropTypes.func,
    logged: PropTypes.bool,
    onSortElements: PropTypes.func,
    sortName: PropTypes.string,
};
CarsContainer.defaultProps = {
    cars: [],
    pageSize: 1,
    currentPage: 1,
    onCarSelected: () => {},
    onDelete: () => {},
    setPage: () => {},
    onEditCart: () => {},
    logged: false,
    onSortElements: () => {},
    sortName: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer);
