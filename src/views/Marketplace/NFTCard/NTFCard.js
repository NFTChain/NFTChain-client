import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import cardImg from '../../../assets/cardImg.jpeg';

const NFTCard = (props) => {
  return (
    <Box bgcolor='background.default' className='card'>
      <Link href={`/marketplace/${props.id}`} className='card-img__wrapper'>
        <img className='card-img' src={cardImg} alt='digital art' />
      </Link>
      <div className='card-info'>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <div className='card-info__actions'>
          <button className='button'>Bid</button>
          <p>Current bid: {props.currentBid}</p>
        </div>
        <div className='card-info__separate'></div>
        <div className='card-info__creators'>
          <div className='card-info__creator'>
            <p className='card-info__title'>Artist</p>
            <p className='card-info__name'>User: {props.artist}</p>
          </div>
          <div className='card-info__creator'>
            <p className='card-info__title'>Owner</p>
            <p className='card-info__name'>User: {props.owner}</p>
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
  currentBid: PropTypes.number,
  artist: PropTypes.number,
  owner: PropTypes.number,
};

export default NFTCard;
