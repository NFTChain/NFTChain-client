import React from 'react';
import Container from '../../common/Container';
import NFTCardList from './NFTCardList';

const Marketplace = () => {
  return (
    <Container className='marketplace'>
      <div className='marketplace-title'>
        <h1>Marketplace</h1>
      </div>
      <div className='card-list'>
        <NFTCardList />
      </div>
    </Container>
  );
};

export default Marketplace;
