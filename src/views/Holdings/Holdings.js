import React, { useState } from 'react';
import { connect } from 'react-redux';
import { connectToContract } from '../../store/actions/contractActions';
import { BEP721ContractString } from '../../utils/getContract';

const Holdings = ({ BEP721Contract, connectToContract, signerAddress }) => {
  useEffect(() => {
    connectToContract(BEP721ContractString);
  }, []);
  getHoldings = async () => {
    const y = await BEP721Contract;
  };
  return (
    <div>
      <button onClick={getHoldings}>click</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    signerAddress: state.contracts.signerAddress,
    BEP721Contract: state.contracts.BEP721Contract,
  };
};

export default connect(mapStateToProps, { connectToContract })(Holdings);
