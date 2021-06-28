import React from 'react';
import { Link } from 'react-router-dom';
import Socials from '../Socials';

const Footer = () => {
  return (
    <div className='footer-marketplace'>
      <div className='footer-marketplace__content'>
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
          <div className='footer-marketplace__socials-box'>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
