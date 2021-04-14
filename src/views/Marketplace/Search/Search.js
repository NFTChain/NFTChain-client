import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';

const Search = () => {
  const [textFilter, setTextFilter] = useState('');

  const onTextChange = (e) => {
    setTextFilter(e.target.value);
  };

  return (
    <div className='search'>
      <Box color='text.primary' className='search-icon__wrapper'>
        <AiOutlineSearch className='search-icon' />
      </Box>
      <div className='search-input'>
        <InputBase
          className='search-text__input'
          defaultValue='Naked input'
          inputProps={{ 'aria-label': 'naked' }}
          onChange={onTextChange}
          value={textFilter}
          placeholder='Search by artist or collections'
        />
      </div>
    </div>
  );
};

export default Search;
