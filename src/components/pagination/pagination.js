import React from "react";

import './pagination.scss'

const Pagination = ({items, pageSize, currentPage, setCurrentPage}) => {
    let totalCount = items.length
    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className="demo">
                <nav className="pagination-outer" aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item">
                            <span className="page-link" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </span>
                        </li>
                        {pages.map(p => {
                            return <li onClick={() => setCurrentPage(p)}
                                       key={p}
                                       className={`page-item${currentPage === p && ' active'}`}>
                                <span className="page-link" >{p}</span>
                            </li>
                        })}
                        <li className="page-item">
                            <span  className="page-link" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </span>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}
export default Pagination

