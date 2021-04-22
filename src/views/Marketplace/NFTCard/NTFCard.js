import React from 'react';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const NFTCard = ({ image, title, id, description, price, artist, owner }) => {
  return (
    <Box bgcolor='background.default' className='card'>
      <Link href={`/marketplace/${id}`} className='card-img__wrapper'>
        <img className='card-img' src={image} alt='digital art' />
      </Link>
      <div className='card-info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='card-info__actions'>
          <button className='button'>Price</button>
          <p>Price: {price}</p>
        </div>
        <div className='card-info__separate'></div>
        <div className='card-info__creators'>
          <div className='card-info__creator'>
            <p className='card-info__title'>Artist</p>
            <p className='card-info__name'>User: {artist}</p>
          </div>
          <div className='card-info__creator'>
            <p className='card-info__title'>Owner</p>
            <p className='card-info__name'>User: {owner}</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

NFTCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.string,
  artist: PropTypes.string,
  owner: PropTypes.string,
};

export default NFTCard;
