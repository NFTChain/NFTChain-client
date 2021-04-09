import React from 'react';
import Container from '../../common/Container';
import NFTCard from './NFTCard';

const Marketplace = () => {
  return (
    <Container maxWidth={{ sm: 720, md: 1400 }} className="container">
      <NFTCard />
      <NFTCard />
      <NFTCard />
      <NFTCard />
      <NFTCard />
      <NFTCard />
      <NFTCard />
      <NFTCard />
    </Container>
  );
};

export default Marketplace;
