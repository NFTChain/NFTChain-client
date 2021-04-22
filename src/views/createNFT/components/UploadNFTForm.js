import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  BEP20ContractString,
  BEP721ContractString,
} from '../../../utils/getContract';
import { connectToContract } from '../../../store/actions/contractActions';

const UploadNFTForm = ({
  BEP20Contract,
  BEP721Contract,
  signerAddress,
  connectToContract,
}) => {
  const [file, setFile] = useState(undefined);
  const [fileType, setFileType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [artist, setArtist] = useState('');
  const [price, setPrice] = useState('');
  const [limit, setLimit] = useState('');

  const handleFileChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
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

  const connectToWalletAndCreate = async () => {
    await connectToContracts();

    if (
      BEP20Contract &&
      BEP721Contract &&
      signerAddress &&
      file &&
      title &&
      description &&
      fileType &&
      artist &&
      limit &&
      price
    ) {
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

      const result = await axios
        .post('https://nftchain.herokuapp.com/nft/upload/', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(async (response) => {
          if (response.data.message === 'upload successful') {
            await mintNFTTokenForUploadedFile(result.data.ipfs_hash);
          }
        })
        .catch((error) => {
          console.log(error);
          debugger;
          alert('Upload of file was unsuccesful, please try again'); // show nice modal here instead of alert
        });

      if (result.data.message === 'upload successful') {
        await mintNFTTokenForUploadedFile(result.data.ipfs_hash);
      }
    } else {
      alert('You need to fill out all fields!'); // show nice modal here instead of alert
    }
  };

  const mintNFTTokenForUploadedFile = async (IPFSHash) => {
    try {
      const mintBEP721Token = await BEP721Contract.createInk(
        IPFSHash,
        limit,
        price,
      );
      debugger;
      const awaitCreationOfToken = await mintBEP721Token.wait((response) => {
        console.log(response);
        debugger;
      }); // mint BEP721 token
      debugger;
      console.log(awaitCreationOfToken);
      //   setIPFSHashOfUploadedImage(IPFSHash);
    } catch (error) {
      debugger;
      console.log(error);
      alert('Creating your unminted NFT was not successful, please try again'); // show nice modal here instead of alert
    }
  };

  const connectToContracts = async () => {
    [BEP20ContractString, BEP721ContractString].forEach((contractString) =>
      connectToContract(contractString),
    );
  };

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
            <img src={file} />
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
      <button onClick={connectToWalletAndCreate}>
        Connect wallet and create
      </button>
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

export default connect(mapStateToProps, { connectToContract })(UploadNFTForm);
