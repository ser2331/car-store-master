const DETAIL_REMOVED_FROM_TABLE = 'DETAIL_REMOVED_FROM_TABLE';
const SET_CURRENT_PAGE_DET = 'SET_CURRENT_PAGE_DET';
const ADD_PROP = 'ADD_PROP';
const RETURN = 'RETURN';

const initialState = {
    details: [
        { id: 1, key: 'Цвет', value: 'dropdown' },
        { id: 2, key: 'Тип топлива', value: 'string' },
        { id: 3, key: 'Год выпуска', value: 'number' },
    ],
    pageSize: 5,
    currentPage: 1,
    redirect: false,
};

const DetailsReducer = (state = initialState, action) => {
    switch (action.type) {
    case DETAIL_REMOVED_FROM_TABLE: {
        const newArr = state.details.filter(({ id }) => id !== action.payload);
        return {
            ...state,
            details: newArr,
        };
    }
    case SET_CURRENT_PAGE_DET: {
        return {
            ...state,
            currentPage: action.currentPage,
        };
    }
    case ADD_PROP: {
        const newItem = {
            id: state.details.length + 1,
            key: action.payload.key,
            value: action.payload.value,
        };

        return {
            ...state,
            details: [
                ...state.details,
                newItem,
            ],
            redirect: true,
        };
    }
    case RETURN: {
        return {
            ...state,
            redirect: false,
        };
    }

    default:
        return state;
    }
};
export default DetailsReducer;
