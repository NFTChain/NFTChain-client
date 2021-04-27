import * as types from '../actionTypes/marketplaceActionTypes';

const initialState = {
  allNFTs: false,
  currentNFT: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL_NFTS:
      return { ...state, allNFTs: action.payload };
    case types.SET_CURRENT_NFT:
      return { ...state, currentNFT: action.payload };
    default:
      return state;
  }
};
