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
            setCurrentPage, onPress, pressed
        } = this.props
        let sortArr = [...details.sort((a, b) => {
            return a.key.toLowerCase().localeCompare(b.key.toLowerCase());
        })]
        let newArr = [...details.sort((a, b) => {
            return a.key.toLowerCase().localeCompare(b.key.toLowerCase());
        }).reverse()]

        return (
            <Table items={this.state.sort ? sortArr : newArr}
                   pressed={pressed}
                   pageSize={pageSize}
                   setCurrentPage={setCurrentPage}
                   currentPage={currentPage}
                   onDelete={onDelete}
                   onPress={onPress}
                   tableName={'Перечень проперти'}
                   tablePrice={'Тип'}
                   onSort={() => this.onSortArrRevers}
                   sort={this.state.sort}
            />
        )
    }
}

const mapStateToProps = ({detailPage}) => {
    return {
        details: detailPage.details,
        pageSize: detailPage.pageSize,
        currentPage: detailPage.currentPage,
        pressed: detailPage.pressed
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(detailRemovedFromTable(id)),
        setCurrentPage: (p) => dispatch(setCurrentPageDet(p)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyContainer)