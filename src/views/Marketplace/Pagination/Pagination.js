import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ NFTPerPage, totalNFTS, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNFTS / NFTPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination'>
      <ul className='pagination-list'>
        {pageNumbers.map((num) => (
          <li
            key={num}
            onClick={() => setCurrentPage(num)}
            className={currentPage == num ? 'active page-link' : 'page-link'}
          >
            {num}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  NFTPerPage: PropTypes.number,
  totalNFTS: PropTypes.number,
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Pagination;
