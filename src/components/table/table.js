import React from "react";
import {Link} from "react-router-dom";

import './table.scss'

import UseButton from "../use-button";
import Pagination from "../pagination";

const Table = ({
                   items, pageSize, currentPage,
                   setCurrentPage, onCarSelected,
                   onEditCart, onDelete, tableName, tablePrice, tableData
               }) => {
    let itemsPage = items.slice((currentPage - 1) * pageSize, currentPage * pageSize)

    const renderRow = (item) => {
        const {id, title, changeData, price, type} = item
        const idx = Math.random()
        return (
            <tr key={idx}>

                <td onClick={() => onCarSelected(id)}>
                    <Link to={`/cars/item${id}`}>
                        {title}
                    </Link>
                </td>
                {price ?
                        <td>{price}$</td> : <td>{type}</td>
                }
                <td>{changeData}</td>
                <td>
                    {onEditCart ?
                        <Link to={`/add-item`} onClick={() => onEditCart(id)}>
                            <span>Ред.</span>
                        </Link> : null
                    }
                    <span onClick={() => onDelete(id)}>Удалить</span>
                </td>
            </tr>
        )
    }
    return (
        <div className='car-table'>
            <Link to='/cars'>
                <span className='nav'>Листинг Товаров</span>
            </Link>
            <Link to='/details'>
                <span className='nav'>Листинг проперти</span>
            </Link>
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
                    {}
                    <th>{tableName}</th>
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
export default Table