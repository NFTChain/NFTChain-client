import * as marketplaceActionTypes from '../actionTypes/marketplaceActionTypes.js';

export const setAllNFTs = (NFTs) => ({
  type: marketplaceActionTypes.SET_ALL_NFTS,
  payload: NFTs,
});

export const setCurrentNFT = (NFT) => ({
  type: marketplaceActionTypes.SET_CURRENT_NFT,
  payload: NFT,
});
