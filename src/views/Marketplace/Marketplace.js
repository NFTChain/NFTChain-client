import Container from '../../common/Container';
import React from 'react';
import NFTCard from './NFTCard';

const Marketplace = () => {
  return (
    <Container className='marketplace'>
      <div className='marketplace-title'>
        <h1>Marketplace</h1>
      </div>
      <div className='card-list'>
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
      </div>
    </Container>
  );
};

export default Marketplace;
