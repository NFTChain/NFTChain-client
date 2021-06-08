import React from 'react';
import { Button } from 'components';

const BuyContainer = ({ buyNFT, history }) => {
  return (
    <div className='buy-container'>
      <Button
        className='button--blue'
        text='Buy'
        onClick={buyNFT}
        style={{ marginRight: '1rem' }}
      />
      <Button
        text='Back'
        className='button'
        onClick={() => history.push('/marketplace')}
      />
    </div>
  );
};

export default BuyContainer;
