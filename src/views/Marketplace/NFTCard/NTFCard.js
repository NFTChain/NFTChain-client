/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div className='card'>
      <div className='card__content'>
        <Link to={`/marketplace/${id}`} className='card__image-box'>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className='card__image'
            alt='nft card'
          />
        </Link>
        <section className='card__info'>
          <div className='card__info-row-1'>
            <h1 className='card__title'>{title}</h1>
            <h4 className='card__description'>{description}</h4>
          </div>
          <div className='card__info-row-2'>
            <p className='card__price'>${price}</p>
            <p className='card__artist'>{artist}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NFTCard;

{
  /* // <Box bgcolor='background.default' className='card'>
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
    // </Box> */
}
