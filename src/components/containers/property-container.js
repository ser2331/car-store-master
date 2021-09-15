import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import Table from '../table';
import { detailRemovedFromTable, setCurrentPageDet } from '../../actions/property-actions';

class PropertyContainer extends Component {
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

    render() {
        const {
            details, pageSize,
            currentPage, onDelete,
            setPage, logged,
        } = this.props;
        const { sortName } = this.state;
        const sortingName = [...details.sort((a, b) => a.key.toLowerCase().localeCompare(b.key.toLowerCase()))];
        const sortNameReverse = [...details.sort((a, b) => a.key.toLowerCase().localeCompare(b.key.toLowerCase())).reverse()];

        return (
            <Table
                items={sortName ? sortingName : sortNameReverse}
                pageSize={pageSize}
                setCurrentPage={setPage}
                currentPage={currentPage}
                onDelete={onDelete}
                tableName="Перечень проперти"
                tablePrice="Тип"
                onSortName={() => this.onSortName}
                sortName={sortName}
                logged={logged}
            />
        );
    }
}

const mapStateToProps = ({ detailPage, carsPage }) => ({
    details: detailPage.details,
    pageSize: detailPage.pageSize,
    currentPage: detailPage.currentPage,
    logged: carsPage.logged,
});
const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => dispatch(detailRemovedFromTable(id)),
    setPage: (p) => dispatch(setCurrentPageDet(p)),
});
PropertyContainer.propTypes = {
    details: [],
    pageSize: 0,
    currentPage: 0,
    onDelete: () => {},
    setPage: () => {},
    logged: false,
};
PropertyContainer.defaultProps = {
    details: PropTypes.array,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onDelete: PropTypes.func,
    setPage: PropTypes.func,
    logged: PropTypes.bool,
};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyContainer);
