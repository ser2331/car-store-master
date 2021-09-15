const detailRemovedFromTable = (id) => ({
    type: 'DETAIL_REMOVED_FROM_TABLE',
    payload: id,
});
const setCurrentPageDet = (p) => ({
    type: 'SET_CURRENT_PAGE_DET',
    currentPage: p,
});
const onAddedPropToTable = (value) => ({
    type: 'ADD_PROP',
    payload: value,
});

export {
    detailRemovedFromTable,
    setCurrentPageDet,
    onAddedPropToTable,
};
