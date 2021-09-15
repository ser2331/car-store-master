import React from 'react';
import { Link } from 'react-router-dom';
import './table.scss';
import { useAlert } from 'react-alert';
import * as PropTypes from 'prop-types';
import UseButton from '../use-button';
import Pagination from '../pagination';
import v1 from '../layers/vector1.png';
import v2 from '../layers/vector2.png';
import Navbar from '../navbar';
import backCar from '../layers/tachka.jpg';
import backProp from '../layers/propCar.jpg';

const Table = ({
    items, pageSize, currentPage,
    setPage, onCarSelected,
    onEditCart, onDelete, tableName,
    tablePrice, tableData, onSortName, sortName, logged, editCar,
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
                    ? <td>{`${price.toLocaleString()} $`}</td> : <td>{value}</td>}
                <td>{changeData}</td>
                <td>
                    {!editCar ? (
                        <Link to="/add-item" onClick={() => onEditCart(id)}>
                            <span>Ред.</span>
                        </Link>
                    ) : null}
                    {logged ? (
                        <span>
                            <button type="button" onClick={() => onDelete(id) && alert.success('Удалено')}>
                                Удалить
                            </button>
                        </span>
                    ) : (
                        <span>
                            Удалить
                        </span>
                    )}
                </td>
            </tr>
        );
    };

    return (
        <div>
            <Navbar />
            <div className="car-table">
                {
                    !editCar
                        ? (
                            <Link
                                className="btn-add"
                                to="/add-item"
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
                            <div className="cars-run">
                                {
                                    onEditCart ? (
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
                        </div>
                    ) : (
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th
                                            className="vector-cont"
                                            onClick={onSortName()}
                                        >
                                            <img
                                                alt="v"
                                                className="vector"
                                                src={sortName ? v2 : v1}
                                            />
                                            {tableName}
                                        </th>
                                        <th>{tablePrice}</th>
                                        <th>{tableData}</th>
                                        <th>Управление</th>
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
                            />
                        </div>
                    )
                }
            </div>
        </div>

    );
};
Table.propTypes = {
    tablePrice: 0,
    tableData: 0,
    onSortName: () => {},
    sortName: '',
    items: [],
    pageSize: 0,
    currentPage: 0,
    onCarSelected: () => {},
    onDelete: () => {},
    setPage: () => {},
    onEditCart: () => {},
    tableName: '',
    logged: false,
    editCar: false,
};
Table.defaultProps = {
    items: PropTypes.array,
    tablePrice: PropTypes.number,
    onSortName: PropTypes.func,
    sortName: PropTypes.string,
    tableData: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onCarSelected: PropTypes.func,
    onDelete: PropTypes.func,
    setPage: PropTypes.func,
    onEditCart: PropTypes.func,
    tableName: PropTypes.string,
    logged: PropTypes.bool,
    editCar: PropTypes.bool,
};
export default Table;
