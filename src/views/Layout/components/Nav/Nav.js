/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/onlyLogo.png';
import { H3, H6 } from '../../../../components/Headings';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#00ab55',
  },
}))(Badge);

const Nav = () => {
  const [search, setSearch] = useState('');
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <nav className='nav-marketplace'>
      <div className='nav-marketplace__left-side'>
        <div className='nav-marketplace__logo-container'>
          <Link to='/' className='nav-marketplace__logo-link'>
            <img
              className='nav-marketplace__logo-img'
              src={logo}
              alt='NFTChain logo'
            />
            <H3 text={'NFTChain'} />
          </Link>
        </div>
        <div className='nav-marketplace__discover-how'>
          <Link to='/' className='nav-marketplace__link'>
            <H6 text={'Discover'} style={{ color: '#101b32' }} />
          </Link>
          <Link to='/' className='nav-marketplace__link'>
            <H6 text={'How it works'} />
          </Link>
        </div>
      </div>
      <div className='nav-marketplace__right-side'>
        <OutlinedInput
          id='outlined-adornment-password'
          type={'text'}
          value={search}
          onChange={handleSearchChange}
          endAdornment={
            <InputAdornment position='end'>
              <SearchIcon aria-label='toggle password visibility' edge='end' />
            </InputAdornment>
          }
          labelWidth={70}
        />
        <StyledBadge variant='dot'>
          <MailIcon />
        </StyledBadge>
      </div>
    </nav>
  );
};

export default Nav;
