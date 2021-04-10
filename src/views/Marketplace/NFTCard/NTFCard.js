import React from 'react';
import cardImg from '../../../assets/cardImg.jpeg';

const NFTCard = () => (
  <div className='card'>
    <div className='card-img__wrapper'>
      <img className='card-img' src={cardImg} alt='digital art' />
    </div>
    <div className='card-info'>
      <h3>River Clouds</h3>
      <p>Landscapes</p>
      <div className='card-info__actions'>
        <button className='button'>Bid</button>
        <p>Current bid: 19</p>
      </div>
      <div className='card-info__separate'></div>
      <div className='card-info__creators'>
        <div className='card-info__creator'>
          <p className='card-info__title'>Artist</p>
          <p className='card-info__name'>User #23423</p>
        </div>
        <div className='card-info__creator'>
          <p className='card-info__title'>Owner</p>
          <p className='card-info__name'>User3433</p>
        </div>
      </div>
    </div>
  </div>
);

export default NFTCard;
