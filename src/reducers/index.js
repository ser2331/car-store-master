import moment from "moment";
import chevrol from "../components/layers/aston-martin.jpg";
import chevrolet from '../components/layers/audi.jpg'
import mitsubishi from '../components/layers/dodge.jpg'
import mers from '../components/layers/singer.jpg'
import toyota from '../components/layers/Maserati_GranTurismo.jpg'
import volkswagen from '../components/layers/cars-dodge-challenger.jpg'

const ONE_CAR_LOADED = 'ONE_CAR_LOADED'
const CAR_ADDED_TO_TABLE = 'CAR_ADDED_TO_TABLE'
const CAR_REMOVED_FROM_TABLE = 'CAR_REMOVED_FROM_TABLE'
const REG_SELECTED = 'REG_SELECTED'
const LOG_SELECTED = 'LOG_SELECTED'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const ON_EDIT_CAR = 'ON_EDIT_CAR'
const ON_REDO_PROPERTY = 'ON_REDO_PROPERTY'

const initialState = {
    cars: [
        {
            id: 1,
            title: 'CASHES VALLEY LANE',
            changeData: '03.07.21',
            price: 180000,
            coverImage: chevrol,
            description: 'Cashes Valley Road is a 11.1 kilometer out and back trail located near Cherry Log,' +
                'Georgia that features a river and is rated as moderate.' +
                'The trail is primarily used for hiking and ohv/off road driving.',
            fuel: 'бензин',
            year: '1995'
        },
        {
            id: 2,
            title: 'Chevrolet Camaro',
            changeData: '05.03.21',
            price: 385000,
            coverImage: chevrolet,
            fuel: 'бензин',
            description: 'Chevrolet, — марка автомобилей, производимых и реализуемых' +
                ' одноимённым экономически ' +
                'самостоятельным подразделением корпорации General Motors. ' +
                'Chevrolet является самой популярной среди марок концерна GM:' +
                ' в 2007 году было реализовано около 2,6 млн автомобилей.',
            year: '1966—2002'
        },
        {
            id: 3,
            title: 'Mitsubishi  Lancer',
            changeData: '04.03.20',
            price: 155555,
            coverImage: mitsubishi,
            fuel: 'бензин',
            description: 'Mitsubishi Lancer (яп. 三菱・ランサー) — семейство автомобилей, ' +
                'выпускаемых Mitsubishi Motors ' +
                'с 1973 года по 2018 год. ... Кроме того, продавался как Lancer Fortis на ' +
                'Тайване с небольшими отличиями' +
                ' в экстерьере по сравнению с Galant Fortis.' +
                ' Название Lancer переводится как улан или копьеносец.',
            year: '2020'
        },
        {
            id: 4,
            title: 'Mercedes-Benz A-класс',
            changeData: '03.04.21',
            price: 155555,
            coverImage: mers,
            fuel: 'бензин',
            description: 'Mercedes-Benz A-класс — серия компактных (до 2012 года — субкомпактных) ' +
                'легковых автомобилей немецкой марки Mercedes-Benz. ' +
                'Первое поколение (W168) было представлено в 1997 году, ' +
                'модель второго поколения (W169) появилась в конце 2004 года, ' +
                'а третье поколение (W176) дебютировало в 2012 году.',
            year: '2020'
        },
        {
            id: 5,
            title: 'Toyota Corolla',
            changeData: '03.07.20',
            price: 155555,
            coverImage: toyota,
            fuel: 'бензин',
            description: 'Toyota Corolla (яп. トヨタ・カローラ, Тойота Королла) —' +
                ' компактный автомобиль, выпускаемый компанией Toyota. ' +
                'Появившись в 1966 году, он в 1997 году возглавил список самых' +
                ' продаваемых автомобилей в истории[1]. По данным «Книги рекордов ' +
                'Гиннесса», к 2005 году во всём мире было продано свыше 30 миллионов ' +
                'автомобилей Corolla[2]. В 2006 году названию Corolla исполнилось 40 лет,' +
                ' в течение которых сменилось десять поколений Toyota Corolla, а общий объём выпуска ' +
                'достиг отметки в 35 миллионов[3]. К июлю 2013 года было продано' +
                ' более 40 миллионов автомобилей модели Corolla[4][5]',
            year: '2020'
        },
        {
            id: 6,
            title: 'Volkswagen Jetta',
            changeData: '01.05.20',
            price: 155555,
            coverImage: volkswagen,
            fuel: 'бензин',
            description: 'Volkswagen Jetta (ˈd͡ʒɛtɑ) — компактный автомобиль, ' +
                'разработанный и выпускаемый компанией Volkswagen Group. ' +
                'Производится с 1979 года. Разработан на базе VW Golf. ' +
                'В отличие от Гольфа со стандартным кузовом хетчбэк (укороченным),' +
                ' стандартный кузов Джетты — классический седан.',
            year: '2020'
        },
    ],
    oneCar: {},
    users: [
        {
            email: 'admin@mail.ru',
            password: 'admin'
        }
    ],
    logged: false,
    editCar: false,
    pageSize: 5,
    currentPage: 1,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ONE_CAR_LOADED:
            const oneCar = state.cars.find((el) => el.id === action.payload)
            return {
                ...state,
                oneCar: oneCar
            }
        case CAR_ADDED_TO_TABLE:
            let now = moment();
            const today = now.format('DD.MM.YY')
            const newItem = {
                id: state.cars.length + 1,
                title: action.payload.title,
                changeData: today,
                coverImage: action.payload.file,
                price: action.payload.price,
                description: action.payload.description,
                year: action.payload.year,
                color: action.payload.color,
                fuel:action.payload.fuel
            }
            alert('Автомобиль Добавлен')
            console.log(newItem)
            return {
                ...state,
                cars: [
                    ...state.cars,
                    newItem
                ]
            }
        case ON_REDO_PROPERTY:
            let reNow = moment();
            const reToday = reNow.format('DD.MM.YY')
            const idx = state.cars.findIndex((el) => el.id === state.oneCar.id)
            const redoItem = {
                id: state.oneCar.id,
                title: action.payload.title,
                changeData: reToday,
                coverImage: action.payload.file,
                price: action.payload.price,
                description: action.payload.description,
                year: action.payload.year,
                color: action.payload.color,
                fuel:action.payload.fuel
            }
            const newReArr = [
                ...state.cars.slice(0, idx),
                redoItem,
                ...state.cars.slice(idx + 1)
            ]
            alert('Автомобиль Изменен')
            return {
                ...state,
                cars: newReArr
            }
        case CAR_REMOVED_FROM_TABLE:
            const newArr = state.cars.filter(({id}) => id !== action.payload)
            return {
                ...state,
                cars: newArr
            }
        case REG_SELECTED:
            const newUser = {
                email: action.payload.email,
                password: action.payload.password
            }
            const ArrUsers = [...state.users,
                newUser]
            return {
                ...state,
                users: ArrUsers,
            }
        case LOG_SELECTED:
            const element = state.users.find(
                (el) => el.email === action.payload.email &&
                    el.password === action.payload.password)
            if (element.email === action.payload.email &&
                element.password === action.payload.password) {
                return {
                    ...state,
                    logged: true
                }
            }
            return {
                ...state,
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case ON_EDIT_CAR:
            const editCar = state.cars.find((el) => el.id === action.payload)
            return {
                ...state,
                oneCar: editCar,
                editCar: true
            }
        default:
            return state
    }
}
export default reducer