/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../../../assets/onlyLogo.png';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '../../../../components/Button';

const Nav = ({ isConnected, BEP20Balance }) => {
  const [search, setSearch] = useState('');
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const formatBalance = (balance) => {
    if (balance == '0.0') {
      return 0;
    }

    return Number(balance).toFixed(2);
  };

  return (
    <nav className='nav'>
      <div className='nav__logo-box'>
        <Link to='/marketplace'>
          <img className='nav__logo-img' src={logo} alt='NFTChain logo' />
        </Link>
      </div>
      <div className='nav__left-box'>
        <div className='nav__left-search'>
          <OutlinedInput
            style={{
              width: '100%',
              fontSize: '1.6rem',
              height: '4rem',
              borderRadius: '5rem',
              color: '#434343',
            }}
            id='outlined-adornment-password'
            type={'text'}
            placeholder='Search by artist or collectable'
            value={search}
            onChange={handleSearchChange}
            endAdornment={
              <InputAdornment position='end'>
                <SearchIcon
                  aria-label='toggle password visibility'
                  edge='end'
                />
              </InputAdornment>
            }
            labelWidth={70}
          />
        </div>
      </div>

      <div className='nav__right-box'>
        <ul className='nav__right-box-items'>
          <li className='nav__right-box-item'>
            <Link to='/marketplace' className='nav__right-box-link'>
              Discover
            </Link>
          </li>
          <li className='nav__right-box-item'>
            <Link to='/holdings' className='nav__right-box-link'>
              Holdings
            </Link>
          </li>
          <li className='nav__right-box-item'>
            <Link to='/' className='nav__right-box-link'>
              Create
            </Link>
          </li>
        </ul>

        <div className='nav__right-buttons'>
          <Link className='nav__right-buttons-link' to='/createNFT'>
            <Button text={'Upload'} className='button--blue' />
          </Link>
          {isConnected ? (
            <button className='button'>
              {BEP20Balance == '0.0' ? (
                <span className='nav__balance'>
                  {formatBalance(BEP20Balance)} NFTC
                </span>
              ) : (
                <span className='nav__balance'>
                  {formatBalance(BEP20Balance)} NFTC
                </span>
              )}
            </button>
          ) : (
            <Button text={'Connect Wallet'} className='button' />
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isConnected: state.ui.isConnected,
  BEP20Balance: state.contracts.BEP20Balance,
});

export default connect(mapStateToProps, undefined)(Nav);
