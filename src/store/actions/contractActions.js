import * as actionTypes from '../actionTypes/contractActionTypes';
import getContract from 'utils/getContract';

export const connectToContract = (contract) => async (dispatch) => {
  const { signerAddress, token } = await getContract(contract);
  dispatch({
    type: actionTypes.GET_CONTRACT,
    payload: {
      contract,
      signerAddress,
      token,
    },
  });
};
