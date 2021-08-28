const oneCarLoaded = (id) => {
    return {
        type: 'ONE_CAR_LOADED',
        payload: id
    }
}
const carAddedToTable = (value) => {
    return {
        type: 'CAR_ADDED_TO_TABLE',
        payload: value
    }
}
const carRemovedFromTable = (carId) => {
    return {
        type: 'CAR_REMOVED_FROM_TABLE',
        payload: carId
    }
}
const onRegSelected = (value) => {
    return {
        type: 'REG_SELECTED',
        payload: value
    }
}
const onLogSelected = (value) => {
    return {
        type: 'LOG_SELECTED',
        payload: value
    }
}
const setCurrentPage = (p) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage: p
    }
}
const onEditCar = (id) => {
    return {
        type: 'ON_EDIT_CAR',
        payload: id
    }
}
const onRedoProperty=(value)=>{
    return {
        type: 'ON_REDO_PROPERTY',
        payload: value
    }
}

export {
    onLogSelected,
    onRegSelected,
    oneCarLoaded,
    carAddedToTable,
    carRemovedFromTable,
    setCurrentPage,
    onEditCar,
    onRedoProperty
}