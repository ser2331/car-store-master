import { combineReducers, createStore } from 'redux';
import CarsReducer from './reducers/cars-reducer';
import DetailsReducer from './reducers/details-reducer';

const reducers = combineReducers(
    {
        carsPage: CarsReducer,
        detailPage: DetailsReducer,
    },
);
const store = createStore(reducers);
export default store;
