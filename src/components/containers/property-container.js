import React, {Component} from "react";
import {connect} from "react-redux";

import Table from "../table";
import {detailRemovedFromTable, setCurrentPageDet} from "../../actions/property-actions";

class PropertyContainer extends Component {
    state = {
        sort: true
    }
    onSortArrRevers = () => {
        this.setState(({sort}) => {
            return {
                sort: !sort
            }
        })
    }

    render() {
        const {
            details, pageSize,
            currentPage, onDelete,
            setCurrentPage,logged
        } = this.props
        let sortArr = [...details.sort((a, b) => {
            return a.key.toLowerCase().localeCompare(b.key.toLowerCase());
        })]
        let newArr = [...details.sort((a, b) => {
            return a.key.toLowerCase().localeCompare(b.key.toLowerCase());
        }).reverse()]

        return (
            <Table items={this.state.sort ? sortArr : newArr}
                   pageSize={pageSize}
                   setCurrentPage={setCurrentPage}
                   currentPage={currentPage}
                   onDelete={onDelete}
                   tableName={'Перечень проперти'}
                   tablePrice={'Тип'}
                   onSort={() => this.onSortArrRevers}
                   sort={this.state.sort}
                   logged={logged}
            />
        )
    }
}

const mapStateToProps = ({detailPage, carsPage}) => {
    return {
        details: detailPage.details,
        pageSize: detailPage.pageSize,
        currentPage: detailPage.currentPage,
        logged: carsPage.logged,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(detailRemovedFromTable(id)),
        setCurrentPage: (p) => dispatch(setCurrentPageDet(p)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyContainer)