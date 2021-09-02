const DETAIL_REMOVED_FROM_TABLE = 'DETAIL_REMOVED_FROM_TABLE'
const SET_CURRENT_PAGE_DET='SET_CURRENT_PAGE_DET'

const initialState = {
    details: [
        {id: 1, title: 'Цвет', type:'dropdown', value:'color'},
        {id: 2, title: 'Тип топлива', type:'input', value:'fuel'},
        {id: 3, title: 'Год выпуска', type:'input', value:'year'},
    ],
    pageSize: 5,
    currentPage: 1,
    pressed:false
}
const DetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETAIL_REMOVED_FROM_TABLE:
            const newArr = state.details.filter(({id}) => id !== action.payload)
            return {
                ...state,
                details: newArr
            }
        case SET_CURRENT_PAGE_DET: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }




        default:
            return state
    }
}
export default DetailsReducer