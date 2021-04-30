import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { connectToContract } from '../../store/actions/contractActions';
import {
  startAction,
  stopAction,
  setConnection,
} from '../../store/actions/uiActions';
import { BEP20ContractString, BEP721ContractString } from 'utils/getContract';
import Loader from 'views/Loader';
import metamaskLogo from '../../assets/metamask.png';
import { Button, H1 } from 'components';
import { marginTopAndBottom } from 'utils/globalStyles';
// We need to handle here still different edge cases, what is when the user is for example on a different network
// or declines the connection to our site, we need to test and handle all cases appopiate

const ConnectWallet = ({
  BEP20Contract,
  BEP721Contract,
  startAction,
  stopAction,
  loading,
  connectToContract,
  setConnection,
}) => {
  useEffect(() => {
    if (BEP721Contract && BEP20Contract) {
      stopAction();
      setConnection(true);
    }
  }, [BEP721Contract, BEP20Contract]);

  const connectToContracts = () => {
    startAction();
    [BEP20ContractString, BEP721ContractString].forEach((contractString) =>
      connectToContract(contractString),
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='connect-wallet-container'>
      <H1 text='Connect your wallet' />
      <div className='metamask-logo-container' style={marginTopAndBottom}>
        <img className='metamask-logo' src={metamaskLogo} alt='metamask' />
      </div>
      <Button text='Connect wallet' onClick={connectToContracts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
    BEP20Contract: state.contracts.BEP20Contract,
    loading: state.ui.loading,
  };
};

export default connect(mapStateToProps, {
  connectToContract,
  startAction,
  stopAction,
  setConnection,
})(ConnectWallet);
