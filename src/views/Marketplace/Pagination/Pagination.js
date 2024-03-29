import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
      <ul className='pagination__list'>
        <IoIosArrowBack
          className='pagination__arrow'
          onClick={handlePreviousPageClick}
        />
        {pageNumbers.map((num) => (
          <li
            key={num}
            onClick={() => setCurrentPage(num)}
            className={
              currentPage == num
                ? 'pagination__link--active pagination__link'
                : 'pagination__link'
            }
          >
            {num}
          </li>
        ))}
        <IoIosArrowForward
          className='pagination__arrow'
          onClick={handleNextPageClick}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
