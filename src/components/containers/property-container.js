import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import Table from '../table';
import { detailRemovedFromTable, setCurrentPageDet } from '../../actions/property-actions';
import { onSort } from '../../actions/cars-actions';

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
            setPage, logged, sortName, onSortElements,
        } = this.props;
        const visibleItems = this.sorting(details, sortName);

        return (
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
            />
        );
    }
}

const mapStateToProps = ({ detailPage, carsPage }) => ({
    details: detailPage.details,
    pageSize: detailPage.pageSize,
    currentPage: detailPage.currentPage,
    logged: carsPage.logged,
    sortName: carsPage.sortName,
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
