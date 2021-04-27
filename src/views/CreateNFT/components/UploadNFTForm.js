import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import axios from 'axios';
import { utils } from 'ethers';
import { startAction, stopAction } from '../../../store/actions/uiActions';
import { createNotification } from '../../../utils/createNotification';
import Loader from 'views/Loader';

const UploadNFTForm = ({
  BEP721Contract,
  startAction,
  stopAction,
  loading,
}) => {
  const [file, setFile] = useState(undefined);
  const [preview, setPreview] = useState(undefined);
  const [fileType, setFileType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [artist, setArtist] = useState('');
  const [price, setPrice] = useState('');
  const [limit, setLimit] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
  };

  const UploadAndCreateUnmintedNFT = async () => {
    if (
      BEP721Contract &&
      file &&
      title &&
      description &&
      fileType &&
      artist &&
      limit &&
      price
    ) {
      try {
        startAction();
        createNotification('info', 'Uploading file to IPFS', 4000)();

        const fileMetaDataObject = {
          name: title,
          keyvalues: {
            description,
            fileType,
            artist,
          },
        };

        const data = new FormData();
        data.append('file', file);

        const metadata = JSON.stringify(fileMetaDataObject);
        data.append('pinataMetadata', metadata);

        const uploadFileToIPFSPromise = await axios.post(
          'https://nftchain.herokuapp.com/nft/upload/',
          data,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          },
        );

        if (uploadFileToIPFSPromise.data.message === 'upload successful') {
          const gotFileAlreadyUploaded = await doesFileAlreadyExists(
            uploadFileToIPFSPromise.data.ipfs_hash,
          );

          if (gotFileAlreadyUploaded) {
            // if file is already on our Blockchain, let user know
            createNotification(
              'error',
              'This NFT got already created, if you think this is wrong please reach out to support.',
              10000,
            );
          } else {
            // else continue creating NFT
            await mintNFTTokenForUploadedFile(
              uploadFileToIPFSPromise.data.ipfs_hash,
            );
          }
        }
      } catch (error) {
        console.log(error);
        debugger;
        createNotification(
          'error',
          'Upload of file was unsuccesful, please try again',
          4000,
        )();
      }
    } else {
      debugger;
      createNotification('error', 'Please fill out every input', 4000)();
    }
  };

  const mintNFTTokenForUploadedFile = async (IPFSHash) => {
    try {
      createNotification(
        'info',
        'Uploading your data to the blockchain',
        4000,
      )();
      const parsedEtherPrice = utils.parseEther(price);
      debugger;
      const createUnmintedNFT = await BEP721Contract.createInk(
        IPFSHash,
        limit,
        parsedEtherPrice,
      ); // create unminted NFT
      await createUnmintedNFT.wait(); // wait for successful transaction
      createNotification('success', 'Congrats! Your NFT got created.', 3000)();
    } catch (error) {
      debugger;
      console.log(error);
      createNotification(
        'error',
        'Creating your unminted NFT was not successful, please try again',
        4000,
      )();
    } finally {
      stopAction();
    }
  };

  const doesFileAlreadyExists = async (IPFSHash) => {
    const searchForId = Number(
      (await BEP721Contract.inkIdByUrl(IPFSHash)).toString(),
    );
    debugger;

    return searchForId > 0; // if id is higher than 0 we know the same file got already uploaded
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className='upload-and-preview'>
        <div className='upload-file-container'>
          <h3>Upload file</h3>
          <div className='upload-file-box'>
            <input type='file' onChange={handleFileChange} />
          </div>
        </div>

        <div className='preview-container'>
          <h3>Preview</h3>
          <div className='preview-box'>
            <img src={preview} className='preview-image' />
          </div>
          {/* this img tag is the preview of the file, we need to handle multiple file types at a later point */}
        </div>
      </div>
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
      <InputLabel htmlFor='artist-label'>Artist</InputLabel>
      <InputBase id='artist-id' value={artist} onChange={handleArtistChange} />

      <InputLabel htmlFor='limit-label'>
        How many NFTs do you want to create for your art?
      </InputLabel>
      <InputBase id='limit-id' value={limit} onChange={handleLimitChange} />
      <InputLabel htmlFor='price-label'>Price in NFTC</InputLabel>
      <InputBase id='price-id' value={price} onChange={handlePriceChange} />
      <button onClick={UploadAndCreateUnmintedNFT}>
        Connect wallet and create
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
    loading: state.ui.loading,
  };
};

export default connect(mapStateToProps, {
  startAction,
  stopAction,
})(UploadNFTForm);
