import React, {Component} from "react";
import {connect} from "react-redux";

import Table from "../table";
import {detailRemovedFromTable, setCurrentPageDet} from "../../actions/property-actions";

class PropertyContainer extends Component {
    state = {
        sortName: false,
    }
    onSortName = () => {
        this.setState(({sortName}) => {
            return {
                sortName: !sortName,
            }
        })
    }

    render() {
        const {
            details, pageSize,
            currentPage, onDelete,
            setCurrentPage,logged
        } = this.props
        let sortName = [...details.sort((a, b) => {
            return a.key.toLowerCase().localeCompare(b.key.toLowerCase());
        })]
        let sortNameReverse = [...details.sort((a, b) => {
            return a.key.toLowerCase().localeCompare(b.key.toLowerCase());
        }).reverse()]

        return (
            <Table items={this.state.sortName ? sortName : sortNameReverse}
                   pageSize={pageSize}
                   setCurrentPage={setCurrentPage}
                   currentPage={currentPage}
                   onDelete={onDelete}
                   tableName={'Перечень проперти'}
                   tablePrice={'Тип'}
                   onSortName={() => this.onSortName}
                   sortName={this.state.sortName}
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