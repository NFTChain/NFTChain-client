import React from 'react';
import { connect } from 'react-redux';
import UploadNFTForm from './components';
import ConnectWallet from '../ConnectWallet';

const CreateNFT = ({ isConnected, artFile = undefined }) => {
  if (!isConnected) {
    return <ConnectWallet />;
  }

  return <UploadNFTForm artFile={artFile} />;
};
const mapStateToProps = (state) => {
  return {
    isConnected: state.ui.isConnected,
  };
};

export default connect(mapStateToProps)(CreateNFT);
