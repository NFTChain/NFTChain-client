import React from 'react';
import { Button } from 'components';

const BuyContainer = ({ buyNFT }) => {
  return (
    <div className='buy-container'>
      <Button className='button--blue' text='Buy' onClick={buyNFT} />
    </div>
  );
};

export default BuyContainer;
