import React from "react";
import {Link} from "react-router-dom";

import './table.scss'

import UseButton from "../use-button";
import Pagination from "../pagination";
import v_1 from '../layers/vector1.png'
import v_2 from '../layers/vector2.png'
import {useAlert} from "react-alert";
import Navbar from "../navbar";

const Table = ({
                   items, pageSize, currentPage,
                   setCurrentPage, onCarSelected,
                   onEditCart, onDelete, tableName,
                   tablePrice, tableData, onSort, sort,
               }) => {
    let itemsPage = items.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    const alert = useAlert();

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
                    {onEditCart ?
                        <Link to={`/add-item`} onClick={() => onEditCart(id)}>
                            <span>Ред.</span>
                        </Link> : null
                    }
                    <span onClick={() => onDelete(id) && alert.error('Автомобиль удален')}>Удалить</span>
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
                        <Link className='btn-add'
                              to='/add-item'>
                            <UseButton
                                nameBut='Добавить товар'
                                onClickButton={() => console.log('Добавить')}/>
                        </Link> :
                        <Link className='btn-add'
                              to='/add-property'>
                            <UseButton
                                nameBut='Добавить проперти'
                                onClickButton={() => console.log('Добавить')}/>
                        </Link>
                }
                <table className='table'>
                    <thead>
                    <tr>
                        <th>
                            <img alt='v'
                                 className='vector'
                                 onClick={onSort()} src={sort ? v_2 : v_1}/>
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
        </div>

    )
}
export default Table