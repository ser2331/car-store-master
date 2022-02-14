import moment from 'moment';
import FakeData from "../fake-data";

const ONE_CAR_LOADED = 'ONE_CAR_LOADED';
const CAR_ADDED_TO_TABLE = 'CAR_ADDED_TO_TABLE';
const CAR_REMOVED_FROM_TABLE = 'CAR_REMOVED_FROM_TABLE';
const REG_SELECTED = 'REG_SELECTED';
const LOG_SELECTED = 'LOG_SELECTED';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const ON_EDIT_CAR = 'ON_EDIT_CAR';
const ON_REDO_PROPERTY = 'ON_REDO_PROPERTY';
const RETURN = 'RETURN';
const ON_OUTPUT = 'ON_OUTPUT';
const ON_SORT = 'ON_SORT';
// const SET_ALL_CARS = 'SET_ALL_CARS';
const ERROR = 'ERROR';
const IS_FETCHING = 'IS_FETCHING';

const { carsData } = FakeData;

const initialState = {
    cars: carsData,
    oneCar: {},
    users: [
        {
            email: 'admin@mail.ru',
            password: 'admin',
        },
    ],
    nameUser: '',
    logged: false,
    pageSize: 5,
    currentPage: 1,
    editCar: false,
    redirect: false,
    sortName: '',
    isError: false,
    isFetching: true,
};
const CarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONE_CAR_LOADED: {
            const oneCar = state.cars.find((el) => el.id === action.payload);
            return {
                ...state,
                oneCar,
            };
        }
        case CAR_ADDED_TO_TABLE: {
            const now = moment();
            const today = now.format('DD.MM.YY');
            const numPrice = Number(action.payload.price);
            const newItem = {
                id: Math.random(),
                title: action.payload.title,
                changeData: today,
                file: action.payload.file,
                price: numPrice,
                description: action.payload.description,
                moreDetails: action.payload.moreDetails,
            };
            return {
                ...state,
                cars: [
                    ...state.cars,
                    newItem,
                ],
                redirect: true,
            };
        }
        case ON_REDO_PROPERTY: {
            const reNow = moment();
            const reToday = reNow.format('DD.MM.YY');
            const redNumPrice = Number(action.payload.price);
            const redoItem = {
                id: action.payload.id,
                title: action.payload.title,
                changeData: reToday,
                file: action.payload.file,
                price: redNumPrice,
                description: action.payload.description,
                moreDetails: action.payload.moreDetails,
            };
            const newArrayCars = state.cars.filter((el) => el.id !== action.payload.id);
            return {
                ...state,
                cars: [...newArrayCars, redoItem],
                redirect: true,
            };
        }
        case CAR_REMOVED_FROM_TABLE: {
            const newArr = state.cars.filter(({ id }) => id !== action.payload);
            return {
                ...state,
                cars: newArr,
            };
        }
        case REG_SELECTED: {
            const newUser = {
                email: action.payload.email,
                password: action.payload.password,
            };
            const ArrUsers = [...state.users,
                newUser];
            return {
                ...state,
                users: ArrUsers,
            };
        }
        case LOG_SELECTED: {
            const element = state.users.find(
                (el) => el.email === action.payload.email
                    && el.password === action.payload.password,
            );
            if (element.email === action.payload.email
                && element.password === action.payload.password) {
                return {
                    ...state,
                    nameUser: element.email,
                    logged: true,
                };
            }
            return {
                ...state,
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        case ON_EDIT_CAR: {
            const onEditCar = state.cars.find((el) => el.id === action.payload);
            return {
                ...state,
                oneCar: onEditCar,
                editCar: true,
            };
        }
        case RETURN: {
            return {
                ...state,
                oneCar: {},
                editCar: false,
                redirect: false,
            };
        }
        case ON_OUTPUT:
            return {
                ...state,
                logged: false,
            };
        case ON_SORT:
            return {
                ...state,
                sortName: action.payload,
            };
        // case SET_ALL_CARS:
        //     return {
        //         ...state,
        //         cars: FakeData.cars,
        //     };
        case ERROR:
            return {
                ...state,
                error: true,
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };

        default:
            return state;
    }
};
export default CarsReducer;
