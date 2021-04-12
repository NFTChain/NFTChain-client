import React from 'react';
import NFTCard from '../NFTCard';
import generateData from '../fakeData';

const NFTCardList = () => {
  const data = generateData();
  return (
    <>
      {data.map((item) => (
        <NFTCard
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          currentBid={item.currentBid}
          owner={item.owner}
          artist={item.artist}
        />
      ))}
    </>
  );
};

export default NFTCardList;
