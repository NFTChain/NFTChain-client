import React from 'react';
import { connect } from 'react-redux';
import UploadNFTForm from './components';
import { connectToContract } from '../../store/actions/contractActions';
import ConnectWallet from '../ConnectWallet';

const CreateNFT = ({ BEP721Balance }) => {
  if (!BEP721Balance) {
    return <ConnectWallet />;
  }

  return <UploadNFTForm />;
};
const mapStateToProps = (state) => {
  return {
    BEP721Balance: state.contracts.BEP721Balance,
  };
};

export default connect(mapStateToProps, { connectToContract })(CreateNFT);
