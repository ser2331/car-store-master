const detailRemovedFromTable = (id) => {
    return {
        type: 'DETAIL_REMOVED_FROM_TABLE',
        payload: id
    }
}
const setCurrentPageDet = (p) => {
    return {
        type: 'SET_CURRENT_PAGE_DET',
        currentPage: p
    }
}

export {
    detailRemovedFromTable,
    setCurrentPageDet
}