import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import {
    carRemovedFromTable,
    oneCarLoaded,
    onEditCar, onSort, setCurrentPage,
    toggleIsFetching,
} from '../../actions/cars-actions';
import Table from '../table';
// import { getAllCars, transformCarsData } from '../../services/services';

import './table-container.scss';

class CarsContainer extends Component {
    // componentDidMount() {
    //     const { dispatch, isFetch, cars } = this.props;
    //     if (!cars.length) {
    //         // isFetch(true);
    //         getAllCars()
    //             .then((response) => dispatch(setAllCars(transformCarsData(response.data))))
    //             .then(() => isFetch(false))
    //             .catch((error) => dispatch(onError(error)));
    //     }
    // }

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
                return cars.sort((a, b) => (a.changeData) - (b.changeData));
            case 'data-reverse':
                return cars.sort((a, b) => (a.changeData) - (b.changeData)).reverse();
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
            isFetching,
            isError,
        } = this.props;
        const visibleItems = this.sorting(cars, sortName);
        return (
            <div className="TableContainer">
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
                    isFetching={isFetching}
                    isError={isError}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ carsPage }) => ({
    cars: carsPage.cars,
    pageSize: carsPage.pageSize,
    currentPage: carsPage.currentPage,
    logged: carsPage.logged,
    sortName: carsPage.sortName,
    isError: carsPage.isError,
    isFetching: carsPage.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
    dispatch,
    onDelete: (id) => dispatch(carRemovedFromTable(id)),
    onCarSelected: (id) => dispatch(oneCarLoaded(id)),
    setPage: (p) => dispatch(setCurrentPage(p)),
    onEditCart: (id) => dispatch(onEditCar(id)),
    onSortElements: (sortType) => dispatch(onSort(sortType)),
    isFetch: (isFetching) => dispatch(toggleIsFetching(isFetching)),
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
    dispatch: PropTypes.func.isRequired,
    isFetch: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
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
