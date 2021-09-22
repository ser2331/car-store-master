import React from 'react';
import * as PropTypes from 'prop-types';
import './pagination.scss';

const Pagination = ({
    items, pageSize, currentPage, setPage,
}) => {
    const totalCount = items.length;

    const pagesCount = Math.ceil(totalCount / pageSize);

    let startPage;
    let endPage;

    if (pagesCount <= 10) {
        startPage = 1;
        endPage = pagesCount;
    } else if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
    } else if (currentPage + 4 >= pagesCount) {
        startPage = pagesCount - 9;
        endPage = pagesCount;
    } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
    }

    const pages = [...Array((endPage + 1) - startPage).keys()].map((i) => startPage + i);

    return (
        <div className="demo">
            <nav className="pagination-outer">
                <ul className="pagination">
                    {
                        currentPage <= 1
                            ? null
                            : (
                                <button
                                    type="button"
                                    className="page-link"
                                    onClick={() => setPage(currentPage - 1)}
                                >
                                    «
                                </button>
                            )
                    }
                    {
                        currentPage >= 10
                            ? (
                                <button
                                    type="button"
                                    className="page-link"
                                    onClick={() => setPage(1)}
                                >
                                    First
                                </button>
                            ) : null
                    }
                    {
                        pages.map((page) => (
                            <button
                                type="button"
                                onClick={() => setPage(page)}
                                key={page}
                                className={currentPage === page ? 'page-link active' : 'page-link'}
                            >
                                {page}
                            </button>
                        ))
                    }
                    {
                        currentPage >= pagesCount - 5
                            ? null
                            : (
                                <button
                                    type="button"
                                    className="page-link"
                                    onClick={() => setPage(pagesCount)}
                                >
                                    Last
                                </button>
                            )
                    }
                    {
                        currentPage === endPage ? null
                            : (
                                <button
                                    type="button"
                                    className="page-link"
                                    onClick={() => setPage(currentPage + 1)}
                                >
                                    »
                                </button>
                            )
                    }
                </ul>
            </nav>
        </div>
    );
};
Pagination.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    setPage: PropTypes.func,
};
Pagination.defaultProps = {
    items: [],
    pageSize: 1,
    currentPage: 1,
    setPage: () => {},
}; export default Pagination;
