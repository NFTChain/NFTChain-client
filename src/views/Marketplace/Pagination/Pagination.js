import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Pagination = ({ NFTPerPage, totalNFTS, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNFTS / NFTPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextPageClick = () => {
    if (currentPage != pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPageClick = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <nav className='pagination'>
      <ul className='pagination-list'>
        <AiOutlineArrowLeft
          className='pagination-arrow'
          onClick={handlePreviousPageClick}
        />
        {pageNumbers.map((num) => (
          <li
            key={num}
            onClick={() => setCurrentPage(num)}
            className={currentPage == num ? 'active page-link' : 'page-link'}
          >
            {num}
          </li>
        ))}
        <AiOutlineArrowRight
          className='pagination-arrow'
          onClick={handleNextPageClick}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
