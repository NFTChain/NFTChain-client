import React from 'react';
import PropTypes from 'prop-types';
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

NFTCardList.propTypes = {
  NFTS: PropTypes.array,
};

export default NFTCardList;
