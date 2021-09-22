const oneCarLoaded = (id) => ({
    type: 'ONE_CAR_LOADED',
    payload: id,
});
const carAddedToTable = (value) => ({
    type: 'CAR_ADDED_TO_TABLE',
    payload: value,
});
const carRemovedFromTable = (carId) => ({
    type: 'CAR_REMOVED_FROM_TABLE',
    payload: carId,
});
const onRegSelected = (value) => ({
    type: 'REG_SELECTED',
    payload: value,
});
const onLogSelected = (value) => ({
    type: 'LOG_SELECTED',
    payload: value,
});
const setCurrentPage = (p) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage: p,
});
const onEditCar = (id) => ({
    type: 'ON_EDIT_CAR',
    payload: id,
});
const onRedoProperty = (value) => ({
    type: 'ON_REDO_PROPERTY',
    payload: value,
});
const onReturn = () => ({
    type: 'RETURN',
});
const onOutput = () => ({
    type: 'ON_OUTPUT',
});
const onSort = (sortType) => ({
    type: 'ON_SORT',
    payload: sortType,
});
const setAllCars = (cars) => ({
    type: 'SET_ALL_CARS',
    payload: cars,
});
const onError = (error) => ({
    type: 'ERROR',
    payload: error,
});
const toggleIsFetching = (isFetching) => ({
    type: 'IS_FETCHING',
    isFetching,
});

export {
    onLogSelected,
    onRegSelected,
    oneCarLoaded,
    carAddedToTable,
    carRemovedFromTable,
    setCurrentPage,
    onEditCar,
    onRedoProperty,
    onReturn,
    onOutput,
    onSort,
    setAllCars,
    onError,
    toggleIsFetching,
};
