import React from 'react';
import * as PropTypes from 'prop-types';
import './pagination.scss';

const Pagination = ({
    items, pageSize, currentPage, setPage,
}) => {
    const totalCount = items.length;
    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }
    return (
        <div className="demo">
            <nav className="pagination-outer" aria-label="Page navigation">
                <ul className="pagination">
                    {
                        currentPage <= 1 ? null
                            : (
                                <button
                                    type="button"
                                    className="page-item"
                                    onClick={() => setPage(currentPage - 1)}
                                >
                                    <span className="page-link" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                    </span>
                                </button>
                            )
                    }

                    {
                        pages.map((page) => (
                            <button
                                type="button"
                                onClick={() => setPage(page)}
                                key={page}
                                className={`page-item${currentPage === page && ' active'}`}
                            >
                                <span className="page-link">{page}</span>
                            </button>
                        ))
                    }
                    {
                        currentPage >= pages.length ? null
                            : (
                                <button
                                    type="button"
                                    className="page-item"
                                    onClick={() => setPage(currentPage + 1)}
                                >
                                    <span className="page-link" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                    </span>
                                </button>
                            )
                    }
                </ul>
            </nav>
        </div>
    );
};
Pagination.propTypes = {
    items: [],
    pageSize: 0,
    currentPage: 0,
    setPage: () => {},
};
Pagination.defaultProps = {
    items: PropTypes.array,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    setPage: PropTypes.func,
}; export default Pagination;
