import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import Table from '../table';
import { detailRemovedFromTable, setCurrentPageDet } from '../../actions/property-actions';
import { onSort } from '../../actions/cars-actions';

import './table-container.scss';

class PropertyContainer extends Component {
    sorting = (details, sortName) => {
        switch (sortName) {
        case 'name':
            return details.sort((a, b) => a.key.toLowerCase().localeCompare(b.key.toLowerCase()));
        case 'name-reverse':
            return details.sort((a, b) => a.key.toLowerCase().localeCompare(b.key.toLowerCase())).reverse();
        default:
            return details;
        }
    };

    render() {
        const {
            details, pageSize,
            currentPage, onDelete,
            setPage, logged, sortName,
            onSortElements, isFetching,
            isError,
        } = this.props;
        const visibleItems = this.sorting(details, sortName);

        return (
            <div className="TableContainer">
                <Table
                    items={visibleItems}
                    pageSize={pageSize}
                    setPage={setPage}
                    currentPage={currentPage}
                    onDelete={onDelete}
                    tableName="Перечень проперти"
                    tablePrice="Тип"
                    sortName={sortName}
                    logged={logged}
                    onSortElements={onSortElements}
                    isFetching={isFetching}
                    isError={isError}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ detailPage, carsPage }) => ({
    details: detailPage.details,
    pageSize: detailPage.pageSize,
    currentPage: detailPage.currentPage,
    logged: carsPage.logged,
    sortName: carsPage.sortName,
    isError: carsPage.isError,
    isFetching: carsPage.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => dispatch(detailRemovedFromTable(id)),
    setPage: (p) => dispatch(setCurrentPageDet(p)),
    onSortElements: (sortType) => dispatch(onSort(sortType)),
});
PropertyContainer.propTypes = {
    details: PropTypes.arrayOf(PropTypes.object),
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onDelete: PropTypes.func,
    setPage: PropTypes.func,
    logged: PropTypes.bool,
    onSortElements: PropTypes.func,
    sortName: PropTypes.string,
    isError: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
};
PropertyContainer.defaultProps = {
    details: [],
    pageSize: 1,
    currentPage: 1,
    onDelete: () => {},
    setPage: () => {},
    logged: false,
    onSortElements: () => {},
    sortName: '',
};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyContainer);
