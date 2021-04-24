import React from 'react';
import { connect } from 'react-redux';
import UploadNFTForm from './components';
import { connectToContract } from '../../store/actions/contractActions';
import Loader from '../Loader';

const CreateNFT = ({ loading }) => {
  if (loading) return <Loader />;
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <UploadNFTForm />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.ui.loading,
  };
};

export default connect(mapStateToProps, { connectToContract })(CreateNFT);
