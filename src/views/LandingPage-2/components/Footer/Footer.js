import React from 'react';
import Socials from '../Socials';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container footer__content'>
        <div className='footer__row'>
          <div className='footer__text'>
            <h3 className='footer__title'>NFTChain</h3>
          </div>
          <div className='footer__socials-box'>
            <Socials />
          </div>
        </div>
        <div className='footer__row'>
          <div className='footer__copyright'>
            <p className='footer__copyright-text'>
              &copy; 2021
              <span className='footer__copyright-name'> NFTChain </span>| All
              rights reserved
            </p>
          </div>
          <div className='footer__nav'>
            <ul className='footer__nav-list'>
              <li className='footer__nav-item'>
                <a href='#' className='footer__nav-link'>
                  litepaper
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='#' className='footer__nav-link'>
                  about
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='#' className='footer__nav-link'>
                  features
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='#' className='footer__nav-link'>
                  roadmap
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='#' className='footer__nav-link'>
                  buy now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
