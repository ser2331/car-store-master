import React from "react";

import './pagination.scss'

const Pagination = ({cars, pageSize, currentPage, setCurrentPage}) => {
    let totalCount = cars.length
    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className='pages'>
            {pages.map(p => {
                return <span onClick={() => setCurrentPage(p)}
                             key={p}
                             className={`one-page${currentPage === p && ' selected'}`}>
                        {p}</span>
            })}
        </div>
    )
}

export default Pagination