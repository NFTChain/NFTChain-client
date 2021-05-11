import React from 'react';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

const Socials = () => {
  return (
    <section className='socials'>
      <div className='socials__content container'>
        <a
          href='https://twitter.com/nft_chain'
          target='_blank'
          className='socials__link'
          rel='noreferrer'
        >
          <FaTwitter className='socials__icon' />
        </a>
        <a
          href='https://t.me/NFT_Chain'
          target='_blank'
          className='socials__link'
          rel='noreferrer'
        >
          <FaTelegramPlane className='socials__icon' />
        </a>
      </div>
    </section>
  );
};

export default Socials;
