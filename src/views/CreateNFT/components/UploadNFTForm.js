import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import axios from 'axios';
import { utils } from 'ethers';
import { startAction, stopAction } from '../../../store/actions/uiActions';
import { createNotification } from '../../../utils/createNotification';
import Loader from 'views/Loader';
import NTFCard from 'views/Marketplace/NFTCard';
import Button from '@material-ui/core/Button';
import { H3 } from 'components/Headings';
import Text from 'components/Text';
import BackupIcon from '@material-ui/icons/Backup';

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
    const file = event.target.files[0];
    const fileType = file.type.split('/')[0];
    setFileType(fileType);
    setFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);
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

    return searchForId > 0; // if id is higher than 0 we know the same file got already uploaded
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='create-nft'>
      <div className='create-nft__left-side'>
        <H3 text='Upload file' />
        <Text text='Choose your file to upload' />
        <div className='create-nft__upload-card'>
          <div className='create-nft__file-upload'>
            <input
              className='create-nft__file-input'
              type='file'
              onChange={handleFileChange}
            />
            <BackupIcon style={{ color: '#959595', fontSize: '4rem' }} />
            <Text text='PNG, GIF, MP4 and more, just try out.' />
          </div>
        </div>
        {/* Start of form  */}
        <div className='upload-form-row'>
          <div className='upload-form-col'>
            <InputLabel htmlFor='title-label'>Title</InputLabel>
            <InputBase
              id='title-input'
              value={title}
              onChange={handleTitleChange}
            />
          </div>
        </div>
        <div className='upload-form-row'>
          <div className='upload-form-col'>
            <InputLabel htmlFor='description-label'>Description</InputLabel>
            <InputBase
              id='description-id'
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className='upload-form-col'>
            <InputLabel htmlFor='artist-label'>Artist</InputLabel>
            <InputBase
              id='artist-id'
              value={artist}
              onChange={handleArtistChange}
            />
          </div>
        </div>
        <div className='upload-form-row'>
          <div className='upload-form-col'>
            <InputLabel htmlFor='limit-label'>
              How many NFTs do you want to create for your file?
            </InputLabel>
            <InputBase
              id='limit-id'
              value={limit}
              onChange={handleLimitChange}
            />
          </div>
          <div className='upload-form-col'>
            <InputLabel htmlFor='price-label'>Price in NFTC</InputLabel>
            <InputBase
              id='price-id'
              value={price}
              onChange={handlePriceChange}
            />
          </div>
        </div>
        <Button
          onClick={UploadAndCreateUnmintedNFT}
          variant='contained'
          color='primary'
        >
          Create NFT
        </Button>
      </div>

      {/* start of preview */}
      <NTFCard
        image={preview && preview}
        title={title && title}
        price={price && price}
        owner={artist && artist}
        artist={artist && artist}
        description={description && description}
      />
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
