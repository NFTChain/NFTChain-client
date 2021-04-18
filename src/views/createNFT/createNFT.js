/* eslint  no-unused-vars: 0 */ // --> OFF
import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import { pinFileToIPFS } from '../../utils/pinFileToIPFS';
import { getFilesFromIPFS } from '../../utils/getFilesFromIPFS';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const CreateNFT = ({ BEP20Contract, BEP721Contract, signerAddress }) => {
  const [images, setImages] = useState([]);
  const [IPFSHashOfUploadedImage, setIPFSHashOfUploadedImage] = useState(
    undefined,
  );
  const [fileType, setFileType] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
  };

  const onDrop = (picture) => {
    console.log('drop', picture);
    setImages(images.concat(picture));
  };

  const uploadFile = async () => {
    const fileMetaDataObject = {
      name: title,
      keyvalues: {
        description,
        fileType,
      },
    };
    pinFileToIPFS(images[0], fileMetaDataObject, mintNFTTokenForUploadedFile);
  };

  const mintNFTTokenForUploadedFile = async (IPFSHash) => {
    const mintNFTToken = await BEP721Contract.mint(signerAddress, IPFSHash);
    setIPFSHashOfUploadedImage(IPFSHash);
  };

  if (!BEP20Contract || !BEP721Contract || !signerAddress)
    return <h1>Please connect to your wallet to be able to continue</h1>; // metamask hardhat transaction issue (https://hardhat.org/metamask-issue.html)

  const connect = async () => {
    getFilesFromIPFS();
  };

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
      <InputLabel id='file-type-label'>File type</InputLabel>
      <Select
        labelId='file-type-selector'
        id='file-type'
        value={fileType}
        onChange={handleFileTypeChange}
      >
        <MenuItem value={'music'}>Music</MenuItem>
        <MenuItem value={'image'}>Image</MenuItem>
        <MenuItem value={'video'}>Video</MenuItem>
        <MenuItem value={'3d-asset'}>3D Asset</MenuItem>
      </Select>
      <InputLabel htmlFor='title-label'>Title</InputLabel>
      <InputBase id='title-input' value={title} onChange={handleTitleChange} />
      <InputLabel htmlFor='description-label'>Description</InputLabel>
      <InputBase
        id='description-id'
        value={description}
        onChange={handleDescriptionChange}
      />

      <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={onDrop}
        imgExtension={['.jpg', 'png', '.gif', '.gif']}
        maxFileSize={5242880}
        withPreview={true}
      />
      {images.length !== 0 && <button onClick={uploadFile}>Upload file</button>}
      {IPFSHashOfUploadedImage && (
        <div style={{ width: '200px', height: '200px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={`https://ipfs.io/ipfs/${IPFSHashOfUploadedImage}`}
            alt='NFT'
          />
        </div>
      )}
      <button onClick={connect}>connect</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    signerAddress: state.contracts.signerAddress,
    BEP20Contract: state.contracts.BEP20Contract,
    BEP721Contract: state.contracts.BEP721Contract,
  };
};

export default connect(mapStateToProps)(CreateNFT);
