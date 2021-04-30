import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/onlyLogo.png';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__content container'>
        <Link to='/' className='nav__logo'>
          <img className='nav__logo-img' src={logo} alt='nftchain logo' />
        </Link>
        <ul className='nav__list'>
          {/* <li className='nav__list-item'>
            <Link className='nav__link' to='/litepaper'>
              Litepaper
            </Link>
          </li>
          <li className='nav__list-item'>
            <a className='nav__link' href='#'>
              About
            </a>
          </li> */}
          <li className='nav__list-item'>
            <a className='nav__link' href='/marketplace'>
              Marketplace
            </a>
          </li>
          <li className='nav__list-item'>
            <a className='nav__link' href='#features'>
              Features
            </a>
          </li>
          <li className='nav__list-item'>
            <a className='nav__link' href='#roadmap'>
              Roadmap
            </a>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/marketplace'>
              Buy now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
