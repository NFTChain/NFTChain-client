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
    },
  };
  return (
    <Box bgcolor='background.default' className='card'>
      <Link to={linkConfig} className='card-img__wrapper'>
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

export default NFTCard;
