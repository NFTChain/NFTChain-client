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
    <section className='socials'>
      <div className='socials__content container'>
        <a href='#' target='_blank' className='socials__link'>
          <FaTwitter className='socials__icon' />
        </a>
        <a href='#' target='_blank' className='socials__link'>
          <FaTelegramPlane className='socials__icon' />
        </a>
        <a href='#' target='_blank' className='socials__link'>
          <FaFacebookF className='socials__icon' />
        </a>
        <a href='#' target='_blank' className='socials__link'>
          <FaRedditAlien className='socials__icon' />
        </a>
        <a href='#' target='_blank' className='socials__link'>
          <FaInstagram className='socials__icon' />
        </a>
      </div>
    </section>
  );
};

export default Socials;
