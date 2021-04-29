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
import Button from '../../../../components/Button';

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
          <Link to='/marketplace' className='nav-marketplace__link'>
            <H6 text={'Discover'} style={{ color: '#101b32' }} />
          </Link>
          <Link to='/holdings' className='nav-marketplace__link'>
            <H6 text={'Holdings'} />
          </Link>
        </div>
      </div>
      <div className='nav-marketplace__right-side'>
        <OutlinedInput
          style={{ height: '3rem' }}
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
          <MailIcon style={{ fontSize: 25 }} />
        </StyledBadge>
        <Link to='/createNFT' style={{ textDecoration: 'none' }}>
          <Button text={'Upload'} style={{ height: '3rem' }} />
        </Link>

        <Button
          text={'Connect Wallet'}
          className='white-button'
          style={{ height: '3rem' }}
        />
      </div>
    </nav>
  );
};

export default Nav;
