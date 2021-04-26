import * as marketplaceActionTypes from '../actionTypes/marketplaceActionTypes.js';

export const setAllNFTs = (NFTs) => ({
  type: marketplaceActionTypes.SET_ALL_NFTS,
  payload: NFTs,
});

export const setSingleNFT = (NFT) => ({
  type: marketplaceActionTypes.SET_SINGLE_NFT,
  payload: NFT,
});
