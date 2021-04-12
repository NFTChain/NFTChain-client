import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState } from 'react';

const Search = () => {
  const [textFilter, setTextFilter] = useState('');

  const onTextChange = (e) => {
    setTextFilter(e.target.value);
  };

  return (
    <div className='search'>
      <div className='search-icon__wrapper'>
        <AiOutlineSearch className='search-icon' />
      </div>
      <div className='search-input'>
        <input
          className='search-text__input'
          type='text'
          placeholder='Search by artist or collections'
          value={textFilter}
          onChange={onTextChange}
        />
      </div>
    </div>
  );
};

export default Search;
