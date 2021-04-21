/* eslint  no-unused-vars: 0 */ // --> OFF
import React, { useState, useEffect } from 'react';
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import {
  BEP20ContractString,
  BEP721ContractString,
} from '../../utils/getContract';
import { connectToContract } from '../../store/actions/contractActions';
const axios = require('axios');

const CreateNFT = ({
  BEP20Contract,
  BEP721Contract,
  signerAddress,
  connectToContract,
}) => {
  const [images, setImages] = useState([]);
  const [IPFSHashOfUploadedImage, setIPFSHashOfUploadedImage] = useState(
    undefined,
  );
  const [fileType, setFileType] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [artist, setArtist] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [limit, setLimit] = React.useState('');

  useEffect(() => {
    const fetchContracts = async () => {
      [BEP20ContractString, BEP721ContractString].forEach((contractString) =>
        connectToContract(contractString),
      );
    };
    fetchContracts();
  }, []);

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

  const onDrop = (picture) => {
    setImages(picture);
  };

  const uploadFile = async () => {
    const tokenId = Number((await BEP721Contract.totalSupply()).toString()) + 1; // total amount of minted tokens + 1 => token id if next uploaded file
    if (title && description && fileType && tokenId && artist && limit) {
      // price check is deleted => need to ask at a later point for setting the price of the nft
      const fileMetaDataObject = {
        name: title,
        keyvalues: {
          description,
          fileType,
          tokenId,
          artist,
        },
      };

      const data = new FormData();
      data.append('file', images[0]); // this needs later to be changed when we dont use the validate dependency anymore

      const metadata = JSON.stringify(fileMetaDataObject);
      data.append('pinataMetadata', metadata);

      const result = await axios.post(
        'https://nftchain.herokuapp.com/nft/upload/',
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );

      if (result.data.message === 'upload successful') {
        await mintNFTTokenForUploadedFile(result.data.ipfs_hash);
      }
    } else {
      alert('You need to fill out all fields!'); // show nice modal here instead of alert
    }
  };

  const mintNFTTokenForUploadedFile = async (IPFSHash) => {
    const mintBEP721Token = await BEP721Contract.createInk(IPFSHash, limit);
    debugger;
    const awaitCreationOfToken = await mintBEP721Token.wait((response) => {
      console.log(response);
      debugger;
    }); // mint BEP721 token
    debugger;
    console.log(awaitCreationOfToken);
    setIPFSHashOfUploadedImage(IPFSHash);

    // await createTradeForMintedNFTToken(tokenId, price);
  };

  // const createTradeForMintedNFTToken = async (tokenId, price) => {
  //   const approveNFTDexContractForTransfer = await BEP721Contract.approve(
  //     NFTDexJSON.address,
  //     tokenId,
  //   ); // approve the NFTDex contract to be able to transfer the NFT token in the next step

  //   await approveNFTDexContractForTransfer.wait();
  //   debugger;
  //   const trade = await NFTDexContract.openTrade(tokenId, price); // creade trade on NFTDex contract
  //   debugger;
  //   console.log(trade, approveNFTDexContractForTransfer);
  // };

  const setNFTonSale = () => {
    return;
  };

  if (!BEP20Contract || !BEP721Contract || !signerAddress)
    return <h1>Please connect to your wallet to be able to continue</h1>; // metamask hardhat transaction issue (https://hardhat.org/metamask-issue.html)

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
      <InputLabel htmlFor='artist-label'>Artist</InputLabel>
      <InputBase id='artist-id' value={artist} onChange={handleArtistChange} />

      <InputLabel htmlFor='limit-label'>
        How many NFT's do you want to create for your art?
      </InputLabel>
      <InputBase id='limit-id' value={limit} onChange={handleLimitChange} />

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
          <h2>Do you want to sell your NFT?</h2>
          <h6>Set the price and your NFT will be on sale on our marketplace</h6>
          <InputLabel htmlFor='price-label'>Price in NFTC</InputLabel>
          <InputBase id='price-id' value={price} onChange={handlePriceChange} />
          <button onClick={setNFTonSale}>Set price</button>
        </div>
      )}
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

export default connect(mapStateToProps, { connectToContract })(CreateNFT);
