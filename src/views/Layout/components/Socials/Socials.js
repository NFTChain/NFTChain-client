import React from 'react';
import {
  FaTwitter,
  FaTelegramPlane,
  FaFacebookF,
  FaRedditAlien,
  FaInstagram,
} from 'react-icons/fa';

const Socials = () => {
  return (
    <section className='socials-marketplace'>
      <div className='socials-marketplace__content container'>
        <a
          href='https://twitter.com/nft_chain'
          target='_blank'
          className='socials-marketplace__link'
          rel='noreferrer'
        >
          <FaTwitter className='socials-marketplace__icon' />
        </a>
        <a
          href='https://t.me/NFT_Chain'
          target='_blank'
          className='socials-marketplace__link'
          rel='noreferrer'
        >
          <FaTelegramPlane className='socials-marketplace__icon' />
        </a>
        <a href='#' target='_blank' className='socials-marketplace__link'>
          <FaFacebookF className='socials-marketplace__icon' />
        </a>
        <a href='#' target='_blank' className='socials-marketplace__link'>
          <FaRedditAlien className='socials-marketplace__icon' />
        </a>
        <a href='#' target='_blank' className='socials-marketplace__link'>
          <FaInstagram className='socials-marketplace__icon' />
        </a>
      </div>
    </section>
  );
};

export default Socials;
