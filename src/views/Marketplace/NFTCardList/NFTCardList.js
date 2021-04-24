import React from 'react';
import NFTCard from '../NFTCard';

const NFTCardList = (props) => {
  return (
    <>
      {props.NFTS.map((item) => (
        <NFTCard key={item.id} {...item} />
      ))}
    </>
  );
};

export default NFTCardList;
