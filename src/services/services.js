import axios from 'axios';
import moment from 'moment';

export const transformCarsData = (arr) => Array.from(arr, ({
    // eslint-disable-next-line camelcase
    id, make, model, price, img_url,
}) => ({
    id,
    title: `${make} ${model}`,
    changeData: moment().format('DD.MM.YY'),
    price,
    file: img_url,
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
}));

// eslint-disable-next-line no-return-await
export const getAllCars = async () => await axios.get('https://private-anon-62a02d424d-carsapi1.apiary-mock.com/cars');
