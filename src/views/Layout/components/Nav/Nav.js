import React from 'react';
import logo from '../../../../assets/onlyLogo.png';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__content container'>
        <div className='nav__logo'>
          <img className='nav__logo-img' src={logo} alt='nftchain logo' />
        </div>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <a className='nav__link' href='https://twitter.com/curm90'>
              Litepaper
            </a>
          </li>
          <li className='nav__list-item'>
            <a className='nav__link' href='https://twitter.com/curm90'>
              About
            </a>
          </li>
          <li className='nav__list-item'>
            <a className='nav__link' href='https://twitter.com/curm90'>
              Features
            </a>
          </li>
          <li className='nav__list-item'>
            <a className='nav__link' href='https://twitter.com/curm90'>
              Roadmap
            </a>
          </li>
          <li className='nav__list-item'>
            <a className='nav__link' href='https://twitter.com/curm90'>
              Buy now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
