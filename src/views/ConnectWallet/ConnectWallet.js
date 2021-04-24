import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { connectToContract } from '../../store/actions/contractActions';
import { startAction, stopAction } from '../../store/actions/contractActions';
import { BEP721ContractString, BEP20ContractString } from 'utils/getContract';
import metamaskLogo from '../../assets/metamask.png';

// We need to handle here still different edge cases, what is when the user is for example on a differenr network
// or declines the connection to our site, we need to test and handle all cases appopiate

const ConnectWallet = ({
  BEP20Contract,
  BEP721Contract,
  signerAddress,
  BEP721Balance,
  BEP20Balance,
}) => {
  useEffect(() => {
    if (
      BEP20Contract &&
      BEP721Contract &&
      signerAddress &&
      BEP721Balance &&
      BEP20Balance
    ) {
      stopAction();
    }
  }, []);

  const connectToContracts = () => {
    startAction();
    [BEP721ContractString, BEP20ContractString].forEach((contractString) =>
      connectToContract(contractString),
    );
  };

  return (
    <div className='connect-wallet-container'>
      <H2>Connect your wallet</H2>
      <div className='metamask-logo-container'>
        <img className='metamask-logo' src={metamaskLogo} alt='metamask' />
      </div>
      <button onClick={connectToContracts}>Connect wallet</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
    BEP20Contract: state.contracts.BEP20Contract,
    signerAddress: state.contracts.signerAddress,
    BEP721Balance: state.contracts.BEP721Balance,
    BEP20Balance: state.contracts.BEP20Balance,
  };
};

export default connect(mapStateToProps, {
  connectToContract,
  startAction,
  stopAction,
})(ConnectWallet);
