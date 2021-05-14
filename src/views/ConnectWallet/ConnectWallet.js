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
  error,
}) => {
  useEffect(() => {
    if (BEP721Contract && BEP20Contract) {
      // if all contracts are loaded - stop loading
      stopAction();
      setConnection(true);
    }
  }, [BEP721Contract, BEP20Contract]);

  useEffect(() => {
    if (BEP20Contract) {
      connectToContract(BEP721ContractString); // if user allowed connection to our site, connect to next contract
    }
  }, [BEP20Contract]);

  const connectToContracts = () => {
    startAction();
    connectToContract(BEP20ContractString); // only start with connecting to one contract
  };

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <H1 text={error} />;
  }

  return (
    <div className='connect-wallet container'>
      <div className='connect-wallet__info-box'>
        <H1 text='Connect your wallet' />
        <div className='connect-wallet__metmask-box' style={marginTopAndBottom}>
          <img
            className='connect-wallet__metamask-logo'
            src={metamaskLogo}
            alt='metamask'
          />
        </div>
        <Button text='Connect wallet' onClick={connectToContracts} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
    BEP20Contract: state.contracts.BEP20Contract,
    loading: state.ui.loading,
    error: state.ui.error,
  };
};

export default connect(mapStateToProps, {
  connectToContract,
  startAction,
  stopAction,
  setConnection,
})(ConnectWallet);
