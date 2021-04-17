import * as actionTypes from '../actionTypes/contractActionTypes';
import getContract from 'utils/getContract';

export const connectToContract = (contract) => (dispatch) => {
  console.log(contract);
  const { signerAddress, token } = getContract(contract);
  debugger;
  dispatch({
    type: actionTypes.GET_CONTRACT,
    payload: {
      contract,
      signerAddress,
      token,
    },
  });
};
