import React from 'react';
import PropTypes from 'prop-types';
import NFTCard from '../NFTCard';

const NFTCardList = (props) => {
  return (
    <>
      {props.NFTS.map((item) => (
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

NFTCardList.propTypes = {
  NFTS: PropTypes.array,
};

export default NFTCardList;
