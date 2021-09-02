import React from "react";
import {connect} from "react-redux";

import Table from "../table";
import {detailRemovedFromTable, setCurrentPageDet} from "../../actions/property-actions";


const PropertyContainer = ({
                               details, pageSize,
                               currentPage, onDelete,
                               setCurrentPage,
                           }) => {
    console.log(details)
    return (
        <Table items={details}
               pageSize={pageSize}
               setCurrentPage={setCurrentPage}
               currentPage={currentPage}
               onDelete={onDelete}
               tableName={'Перечень проперти'}
               tablePrice={'Тип'}/>
    )
}
const mapStateToProps = ({detailPage}) => {
    return {
        details:detailPage.details,
        pageSize:detailPage.pageSize,
        currentPage:detailPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(detailRemovedFromTable(id)),
        setCurrentPage: (p) => dispatch(setCurrentPageDet(p)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PropertyContainer)