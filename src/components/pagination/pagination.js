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
                        currentPage >= pages.length ? null
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
