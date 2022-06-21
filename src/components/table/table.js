import React from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import * as PropTypes from 'prop-types';
import Types from "../../services/types";
import UseButton from '../use-button';
import Pagination from '../pagination';
import v1 from '../layers/vector1.png';
import v2 from '../layers/vector2.png';
import Navbar from '../navbar';
import backCar from '../layers/tachka.jpg';
import backProp from '../layers/propCar.jpg';

import './table.scss';

const { routingMap } = Types;

const Table = ({
    items, pageSize, currentPage,
    setPage, onCarSelected,
    onEditCart, onDelete, tableName,
    tablePrice, tableData, onSortElements, sortName, logged, isError, isFetching,
}) => {
    const alert = useAlert();
    const itemsPage = items.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const renderRow = (item) => {
        const {
            id, title, changeData, price, value, key,
        } = item;
        const idx = Math.random();
        return (
            <tr key={idx}>
                {title
                    ? (
                        <td>
                            <Link to={`/cars/item${id}`} onClick={() => onCarSelected(id)}>
                                {title}
                            </Link>
                        </td>
                    )
                    : <td>{key}</td>}
                {price
                    ? (<td>{`${price.toLocaleString()} $`}</td>)
                    : (<td>{value}</td>)}
                {changeData
                    ? (<td>{changeData}</td>)
                    : null}
                <td>
                    { tableData ? (
                        <Link to="/add-item" onClick={() => onEditCart(id)}>
                            <span className="edit">Ред.</span>
                        </Link>
                    ) : null}
                    {logged ? (
                        <button className="delete" type="button" onClick={() => onDelete(id) && alert.success('Удалено')}>
                            Удалить
                        </button>
                    ) : (
                        <button className="delete disable" type="button" onClick={() => alert.error('Авторизуйтесь пожалуйста')}>
                            Удалить
                        </button>
                    )}
                </td>
            </tr>
        );
    };
    return (
        <div>
            <Navbar />
            <div className="car-table container">
                {
                    tableName === 'Перечень товаров' ? (
                        <Link
                            className="btn-add"
                            to={routingMap.get('addItem').path}
                        >
                            <UseButton nameBut="Добавить товар" />
                        </Link>
                    ) : (
                        <Link
                            className="btn-add"
                            to="/add-property"
                        >
                            <UseButton nameBut="Добавить проперти" />
                        </Link>
                    )
                }
                {
                    items.length === 0 ? (
                        <div>
                            {
                                !isFetching && !isError
                                    ? (
                                        <div className="cars-run">
                                            {
                                                tableName === 'Перечень товаров' ? (
                                                    <div className="cars-run-out">
                                                        <h5>Добавьте новый автомобиль</h5>
                                                        <img src={backCar} alt="car" />
                                                    </div>
                                                ) : (
                                                    <div className="cars-run-out">
                                                        <h5>Добавьте новое свойство</h5>
                                                        <img src={backProp} alt="car" />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ) : null
                            }
                            {isFetching ? (<div>Loading...</div>) : null}
                            {isError ? (<div>Что-то пошло не так...</div>) : null}
                        </div>
                    ) : (
                        <div className="table-wrapper">
                            <table className="table">
                                <thead>
                                    <tr className="vector-cont">
                                        <th onClick={sortName !== 'name' ? () => onSortElements('name') : () => onSortElements('name-reverse')}>
                                            <div className="table-column-name">
                                                <img
                                                    alt="v"
                                                    className="vector"
                                                    src={sortName === 'name' ? v2 : v1}
                                                />
                                                {tableName}
                                            </div>
                                        </th>
                                        <th onClick={sortName !== 'price' ? () => onSortElements('price') : () => onSortElements('price-reverse')}>
                                            <div className="table-column-name">
                                                <img
                                                    alt="v"
                                                    className="vector"
                                                    src={sortName === 'price' ? v2 : v1}
                                                />
                                                {tablePrice}
                                            </div>
                                        </th>
                                        {
                                            tableData
                                                ? (
                                                    <th onClick={sortName !== 'data' ? () => onSortElements('data') : () => onSortElements('data-reverse')}>
                                                        <div className="table-column-name">
                                                            <img
                                                                alt="v"
                                                                className="vector"
                                                                src={sortName === 'data' ? v2 : v1}
                                                            />
                                                            {tableData}
                                                        </div>
                                                    </th>
                                                ) : null
                                        }
                                        <th>
                                            <div className="table-column-name">
                                                <div />
                                                Управление
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemsPage.map(renderRow)}
                                </tbody>
                            </table>
                            <Pagination
                                items={items}
                                pageSize={pageSize}
                                setPage={setPage}
                                currentPage={currentPage}
                            />
                        </div>
                    )
                }
            </div>
        </div>

    );
};
Table.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    tablePrice: PropTypes.string,
    onSortElements: PropTypes.func,
    sortName: PropTypes.string,
    tableData: PropTypes.string,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onCarSelected: PropTypes.func,
    onDelete: PropTypes.func,
    setPage: PropTypes.func,
    onEditCart: PropTypes.func,
    tableName: PropTypes.string,
    logged: PropTypes.bool,
    isError: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
};
Table.defaultProps = {
    tablePrice: '',
    tableData: '',
    onSortElements: () => {},
    sortName: '',
    items: [],
    pageSize: 1,
    currentPage: 1,
    onCarSelected: () => {},
    onDelete: () => {},
    setPage: () => {},
    onEditCart: () => {},
    tableName: '',
    logged: false,
};
export default Table;
