/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const NFTCard = ({
  image,
  title,
  id,
  description,
  price,
  artist,
  owner,
  limit,
  count,
  artistAddress,
}) => {
  const linkConfig = {
    pathname: `/marketplace/${id}`,
    state: {
      image,
      title,
      id,
      description,
      price,
      artist,
      owner,
      limit,
      count,
      artistAddress,
    },
  };
  return (
    // <Box bgcolor='background.default' className='card'>
    //   <Link to={linkConfig} className='card-img__wrapper'>
    //     <img className='card-img' src={image} alt='digital art' />
    //   </Link>
    //   <div className='card-info'>
    //     <h3>{title}</h3>
    //     <p>{description}</p>
    //     <div className='card-info__actions'>
    //       <button className='button'>Buy</button>
    //       <p>Price: {price}</p>
    //     </div>
    //     <div className='card-info__separate'></div>
    //     <div className='card-info__creators'>
    //       <div className='card-info__creator'>
    //         <p className='card-info__title'>Artist</p>
    //         <p className='card-info__name'>User: {artist}</p>
    //       </div>
    //       <div className='card-info__creator'>
    //         <p className='card-info__title'>Owner</p>
    //         <p className='card-info__name'>User: {owner}</p>
    //       </div>
    //     </div>
    //   </div>
    // </Box>
    <div className='card'>
      <Link to={linkConfig} className='card-img__wrapper'>
        <div className='blue-filter'>
          <button className='btn-reveal'>Buy</button>
        </div>
        <div className='card__image'>
          <img className='card-img' src={image} alt='digital art' />
        </div>
      </Link>
      <div className='card__content'>
        <div className='card__tag'>{title}</div>
        <div className='card__head'>{description}</div>
        <div className='card__text'></div>
      </div>
    </div>
  );
};

export default NFTCard;
