import * as actionTypes from '../actionTypes/blockchainActionTypes';
import getBlockchain from 'utils/getContract';
export const getSmartContract = () => {

  const { signerAddress, token } = await getBlockchain();
  return { type: SAVE_ROOM_ID, payload: roomId };
};

export const connectToBlockchain = () => dispatch => {
    dispatch({
      type: actionTypes.START_GET_BLOCKCHAIN,
    });
    
  };
