import React from "react";
import {Link} from "react-router-dom";

import './table.scss'

import UseButton from "../use-button";
import Pagination from "../pagination";
import v_1 from '../layers/vector1.png'
import v_2 from '../layers/vector2.png'
import Navbar from "../navbar";
import {useAlert} from "react-alert";
import backCar from '../layers/tachka.jpg'
import backProp from '../layers/propCar.jpg'

const Table = ({
                   items, pageSize, currentPage,
                   setCurrentPage, onCarSelected,
                   onEditCart, onDelete, tableName,
                   tablePrice, tableData, onSort, sort, logged
               }) => {
    const alert = useAlert()
    let itemsPage = items.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    const renderRow = (item) => {
        const {id, title, changeData, price, value, key} = item
        const idx = Math.random()
        return (
            <tr key={idx}>
                {title ?
                    <td onClick={() => onCarSelected(id)}>
                        <Link to={`/cars/item${id}`}>
                            {title}
                        </Link>
                    </td> :
                    <td>{key}</td>
                }
                {price ?
                    <td>{price}$</td> : <td>{value}</td>
                }
                <td>{changeData}</td>
                <td>
                    {onEditCart ? (
                        <Link to={`/add-item`} onClick={() => onEditCart(id)}>
                            <span>Ред.</span>
                        </Link>
                    ) : null
                    }
                    {logged ? (
                        <span onClick={() => onDelete(id) && alert.success('Удалено')}>
                            Удалить
                        </span>
                    ) : (
                        <span>
                            Удалить
                        </span>
                    )}
                </td>
            </tr>
        )
    }

    return (
        <div>
            <Navbar/>
            <div className='car-table'>
                {
                    onEditCart ?
                        (
                            <Link className='btn-add'
                                  to='/add-item'>
                                <UseButton nameBut='Добавить товар'/>
                            </Link>
                        ) : (
                            <Link className='btn-add'
                                  to='/add-property'>
                                <UseButton nameBut='Добавить проперти'/>
                            </Link>
                        )
                }
                {
                    items.length === 0 ? (
                        <div>
                            <div className='cars-run'>
                                {
                                    onEditCart ? (
                                        <div className='cars-run-out'>
                                            <h5>Добавьте новый автомобиль</h5>
                                            <img src={backCar} alt='car'/>
                                        </div>
                                    ) : (
                                        <div className='cars-run-out'>
                                            <h5>Добавьте новое свойство</h5>
                                            <img src={backProp} alt='car'/>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ) : (
                        <div>
                            <table className='table'>
                                <thead>
                                <tr>
                                    <th className='vector-cont'
                                        onClick={onSort()}>
                                        <img alt='v'
                                             className='vector'
                                              src={sort ? v_2 : v_1}/>
                                        {tableName}</th>
                                    <th>{tablePrice}</th>
                                    <th>{tableData}</th>
                                    <th>Управление</th>
                                </tr>
                                </thead>
                                <tbody>
                                {itemsPage.map(renderRow)}
                                </tbody>
                            </table>
                            <Pagination items={items}
                                        pageSize={pageSize}
                                        setCurrentPage={setCurrentPage}
                                        currentPage={currentPage}/>
                        </div>
                    )
                }
            </div>
        </div>

    )
}
export default Table