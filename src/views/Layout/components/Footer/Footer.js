import React from 'react';
import { Link } from 'react-router-dom';
import Socials from '../../../LandingPage/components/Socials';

const Footer = () => {
  return (
    <div className='footer-marketplace'>
      <div className='container footer-marketplace__content'>
        <div className='footer-marketplace__row'>
          <div className='footer-marketplace__text'>
            <h3 className='footer-marketplace__title'>NFTChain</h3>
          </div>
          <div className='footer-marketplace__socials-box'>
            <Socials />
          </div>
        </div>
        <div className='footer-marketplace__row'>
          <div className='footer-marketplace__copyright'>
            <p className='footer-marketplace__copyright-text'>
              &copy; 2021
              <span className='footer-marketplace__copyright-name'>
                <Link className='footer-marketplace__copyright-link' to='/'>
                  NFTChain
                </Link>
              </span>
              | All rights reserved
            </p>
          </div>
          <div className='footer-marketplace__nav'>
            <ul className='footer-marketplace__nav-list'>
              <li className='footer-marketplace__nav-item'>
                <Link to='/litepaper' className='footer-marketplace__nav-link'>
                  litepaper
                </Link>
              </li>
              <li className='footer-marketplace__nav-item'>
                <a href='#about' className='footer-marketplace__nav-link'>
                  about
                </a>
              </li>
              <li className='footer-marketplace__nav-item'>
                <a href='#features' className='footer-marketplace__nav-link'>
                  features
                </a>
              </li>
              <li className='footer-marketplace__nav-item'>
                <a href='#roadmap' className='footer-marketplace__nav-link'>
                  roadmap
                </a>
              </li>
              <li className='footer-marketplace__nav-item'>
                <Link
                  to='/marketplace'
                  className='footer-marketplace__nav-link'
                >
                  buy now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
