import toyota from './components/layers/Maserati_GranTurismo.jpg';
import chevrolet from './components/layers/audi.jpg';
import mitsubishi from './components/layers/cars-dodge-challenger.jpg';
import mers from './components/layers/Maserati_GranTurismo.jpg';
import volkswagen from './components/layers/singer.jpg';
import chevrol from './components/layers/Maserati_GranTurismo.jpg';

export default class FakeData {
    static carsData = [
        {
            id: 5,
            title: 'Toyota Corolla',
            changeData: '03.07.20',
            price: 1555,
            file: toyota,
            description: 'Toyota Corolla (яп. トヨタ・カローラ, Тойота Королла) —'
                + ' компактный автомобиль, выпускаемый компанией Toyota. '
                + 'Появившись в 1966 году, он в 1997 году возглавил список самых'
                + ' продаваемых автомобилей в истории[1]. По данным «Книги рекордов '
                + 'Гиннесса», к 2005 году во всём мире было продано свыше 30 миллионов '
                + 'автомобилей Corolla[2]. В 2006 году названию Corolla исполнилось 40 лет,'
                + ' в течение которых сменилось десять поколений Toyota Corolla, а общий объём выпуска '
                + 'достиг отметки в 35 миллионов[3]. К июлю 2013 года было продано'
                + ' более 40 миллионов автомобилей модели Corolla[4][5]',
            moreDetails: [],
        },
        {
            id: 1,
            title: 'CASHES VALLEY LANE',
            changeData: '03.07.21',
            price: 18000,
            file: chevrol,
            description: 'Cashes Valley Road is a 11.1 kilometer out and back trail located near Cherry Log,'
                + 'Georgia that features a river and is rated as moderate.'
                + 'The trail is primarily used for hiking and ohv/off road driving.',
            moreDetails: [],
        },
        {
            id: 2,
            title: 'Chevrolet Camaro',
            changeData: '05.03.21',
            price: 38500450,
            file: chevrolet,
            description: 'Chevrolet, — марка автомобилей, производимых и реализуемых'
                + ' одноимённым экономически '
                + 'самостоятельным подразделением корпорации General Motors. '
                + 'Chevrolet является самой популярной среди марок концерна GM:'
                + ' в 2007 году было реализовано около 2,6 млн автомобилей.',
            moreDetails: [],
        },
        {
            id: 3,
            title: 'Mitsubishi  Lancer',
            changeData: '04.03.20',
            price: 15442555,
            file: mitsubishi,
            description: 'Mitsubishi Lancer (яп. 三菱・ランサー) — семейство автомобилей, '
                + 'выпускаемых Mitsubishi Motors '
                + 'с 1973 года по 2018 год. ... Кроме того, продавался как Lancer Fortis на '
                + 'Тайване с небольшими отличиями'
                + ' в экстерьере по сравнению с Galant Fortis.'
                + ' Название Lancer переводится как улан или копьеносец.',
            moreDetails: [],
        },
        {
            id: 4,
            title: 'Mercedes-Benz A-класс',
            changeData: '03.04.21',
            price: 325,
            file: mers,
            description: 'Mercedes-Benz A-класс — серия компактных (до 2012 года — субкомпактных) '
                + 'легковых автомобилей немецкой марки Mercedes-Benz. '
                + 'Первое поколение (W168) было представлено в 1997 году, '
                + 'модель второго поколения (W169) появилась в конце 2004 года, '
                + 'а третье поколение (W176) дебютировало в 2012 году.',
            moreDetails: [],
        },
        {
            id: 6,
            title: 'Volkswagen Jetta',
            changeData: '01.05.20',
            price: 101101,
            file: volkswagen,
            description: 'Volkswagen Jetta (ˈd͡ʒɛtɑ) — компактный автомобиль, '
                + 'разработанный и выпускаемый компанией Volkswagen Group. '
                + 'Производится с 1979 года. Разработан на базе VW Golf. '
                + 'В отличие от Гольфа со стандартным кузовом хетчбэк (укороченным),'
                + ' стандартный кузов Джетты — классический седан.',
            moreDetails: [],
        },
    ]
}