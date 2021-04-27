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
import NTFCard from 'views/Marketplace/NFTCard';
import Button from '@material-ui/core/Button';

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
    <div className='create-nft-container'>
      <div className='upload-preview-container'>
        <div className='upload-and-form'>
          <div className='upload-card'>
            <div className='upload-card-body'>
              <div className='upload-card-title'>Upload your file here</div>
              <div className='upload-card-subtitle'>
                Maximum file size is 5MB
              </div>
              <div className='file-upload'>
                <input
                  className='file-input'
                  type='file'
                  onChange={handleFileChange}
                />
                <svg
                  className='icon'
                  viewBox='0 0 60 60'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='Page-1' fill='none' fillRule='evenodd'>
                    <g id='135---Upload-File' fillRule='nonzero'>
                      <path
                        id='Shape'
                        d='m45 5v5.64c-.3100728-.0017336-.6028238.1427891-.79.39l-7.97 10.36c-.2321692.3015898-.2730081.7088268-.1053486 1.0505127.1676595.3416858.5147463.5585742.8953486.5594873h2.97c.5522847 0 1 .4477153 1 1v8.7c-2.4140699.8930859-4.4288624 2.6205577-5.68 4.87-1.3148871-.924088-2.88287-1.4199757-4.49-1.42-4.098463-.0798372-7.4887279 3.1717757-7.58 7.27.0025703 1.2394906.3301312 2.4566379.95 3.53-2.4876122.8596901-4.1679958 3.1882217-4.2 5.82-.0024343.7641659.143604 1.5215278.43 2.23h-15.43c-2.209139 0-4-1.790861-4-4v-37h9c2.209139 0 4-1.790861 4-4v-9h27c2.209139 0 4 1.790861 4 4z'
                        fill='#a4c2f7'
                      />
                      <path
                        id='Shape'
                        d='m29.289 36.3c-.4803677-.0971145-.9689302-.1480134-1.459-.152-4.098463-.0798372-7.4887279 3.1717757-7.58 7.27.0025703 1.2394906.3301312 2.4566379.95 3.53-2.4882959.8599378-4.1688345 3.1894844-4.2 5.822-.0024343.7641659.143604 1.5215278.43 2.23h3c-.286396-.7084722-.4324343-1.4658341-.43-2.23.0320042-2.6317783 1.7123878-4.9603099 4.2-5.82-.6198688-1.0733621-.9474297-2.2905094-.95-3.53.0579363-3.5096239 2.5858828-6.4900808 6.039-7.12z'
                        fill='#7facfa'
                      />
                      <path
                        id='Shape'
                        d='m41 1h-3c2.209139 0 4 1.790861 4 4v5.64c-.3100728-.0017336-.6028238.1427891-.79.39l-7.97 10.36c-.2321692.3015898-.2730081.7088268-.1053486 1.0505127.1676595.3416858.5147463.5585742.8953486.5594873h2.97c.5522847 0 1 .4477153 1 1v8.7c-1.9933891.7448886-3.724038 2.0589578-4.977 3.779.8206538.2368081 1.5974232.605267 2.3 1.091 1.2503977-2.2488979 3.2640474-3.9763021 5.677-4.87v-8.7c0-.5522847-.4477153-1-1-1h-2.97c-.3806023-.0009131-.7276891-.2178015-.8953486-.5594873-.1676595-.3416859-.1268206-.7489229.1053486-1.0505127l7.97-10.36c.1871762-.2472109.4799272-.3917336.79-.39v-5.64c0-2.209139-1.790861-4-4-4z'
                        fill='#7facfa'
                      />
                      <path
                        id='Shape'
                        d='m14 1v9c0 2.209139-1.790861 4-4 4h-9z'
                        fill='#e8edfc'
                      />
                      <path
                        id='Shape'
                        d='m59 52.77c-.0765094 3.5144351-2.9854814 6.3025729-6.5 6.23h-26c-2.6494875.0284709-5.0510605-1.5541143-6.07-4-.286396-.7084722-.4324343-1.4658341-.43-2.23.0320042-2.6317783 1.7123878-4.9603099 4.2-5.82-.6198688-1.0733621-.9474297-2.2905094-.95-3.53.0912721-4.0982243 3.481537-7.3498372 7.58-7.27 1.60713.0000243 3.1751129.495912 4.49 1.42 1.2511376-2.2494423 3.2659301-3.9769141 5.68-4.87v12.3c0 .5522847.4477153 1 1 1h6c.5522847 0 1-.4477153 1-1v-12.23c4.0203621 1.4998194 6.7031019 5.319246 6.75 9.61-.0037166 1.5713127-.3771119 3.1197043-1.09 4.52 2.5585622.8196318 4.3063464 3.1835704 4.34 5.87z'
                        fill='#e8edfc'
                      />
                      <path
                        id='Shape'
                        d='m38 34.412v10.588c0 .5522847.4477153 1 1 1h3c-.5522847 0-1-.4477153-1-1v-12.3c-1.083917.4091207-2.0963967.9869091-3 1.712z'
                        fill='#cad9fc'
                      />
                      <path
                        id='Shape'
                        d='m54.66 46.9c.7128881-1.4002957 1.0862834-2.9486873 1.09-4.52-.0468981-4.290754-2.7296379-8.1101806-6.75-9.61v1.768c2.3611081 1.9206712 3.7372103 4.7983762 3.75 7.842-.0037166 1.5713127-.3771119 3.1197043-1.09 4.52 2.5585622.8196318 4.3063464 3.1835704 4.34 5.87-.0765094 3.5144351-2.9854814 6.3025729-6.5 6.23h3c3.5145186.0725729 6.4234906-2.7155649 6.5-6.23-.0336536-2.6864296-1.7814378-5.0503682-4.34-5.87z'
                        fill='#cad9fc'
                      />
                      <path
                        id='Shape'
                        d='m52.97 23h-2.97c-.5522847 0-1 .4477153-1 1v21c0 .5522847-.4477153 1-1 1h-6c-.5522847 0-1-.4477153-1-1v-21c0-.5522847-.4477153-1-1-1h-2.97c-.3806023-.0009131-.7276891-.2178015-.8953486-.5594873-.1676595-.3416859-.1268206-.7489229.1053486-1.0505127l7.97-10.36c.1894263-.2440794.4810387-.3868932.79-.3868932s.6005737.1428138.79.3868932l7.97 10.36c.2321692.3015898.2730081.7088268.1053486 1.0505127-.1676595.3416858-.5147463.5585742-.8953486.5594873z'
                        fill='#e8edfc'
                      />
                      <path
                        id='Shape'
                        d='m53.76 21.39-7.97-10.36c-.1894263-.2440794-.4810387-.3868932-.79-.3868932s-.6005737.1428138-.79.3868932l-.71.923 7.26 9.437c.2321692.3015898.2730081.7088268.1053486 1.0505127-.1676595.3416858-.5147463.5585742-.8953486.5594873h-2.97c-.5522847 0-1 .4477153-1 1v21c0 .5522847-.4477153 1-1 1h3c.5522847 0 1-.4477153 1-1v-21c0-.5522847.4477153-1 1-1h2.97c.3806023-.0009131.7276891-.2178015.8953486-.5594873.1676595-.3416859.1268206-.7489229-.1053486-1.0505127z'
                        fill='#cad9fc'
                      />
                      <path
                        id='Shape'
                        d='m5 55h3c-2.209139 0-4-1.790861-4-4v-37l13-13h-3l-13 13v37c0 2.209139 1.790861 4 4 4z'
                        fill='#fff'
                      />
                      <path id='Rectangle-path' d='m0 43h2v8h-2z' fill='#fff' />
                      <g fill='#428dff'>
                        <path
                          id='Shape'
                          d='m35 6c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-6c-.5522847 0-1 .44771525-1 1s.4477153 1 1 1z'
                        />
                        <path
                          id='Shape'
                          d='m41 6c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1h-2c-.5522847 0-1 .44771525-1 1s.4477153 1 1 1z'
                        />
                        <path
                          id='Shape'
                          d='m9 20h9c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-9c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1z'
                        />
                        <path
                          id='Shape'
                          d='m22 19c0 .5522847.4477153 1 1 1h8c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-8c-.5522847 0-1 .4477153-1 1z'
                        />
                        <path
                          id='Shape'
                          d='m9 25h15c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-15c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1z'
                        />
                        <path
                          id='Shape'
                          d='m9 30h9c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-9c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1z'
                        />
                        <path
                          id='Shape'
                          d='m55.989 46.375c.5032696-1.2717784.7614736-2.6272645.761-3.995-.0273794-4.4543198-2.6714766-8.4760894-6.75-10.267v-8.113h2.969c.7619202.000163 1.457747-.4325997 1.7944905-1.116066.3367436-.6834663.2558999-1.4988943-.2084905-2.102934l-7.97-10.36c-.1591429-.2000741-.3584195-.364605-.585-.483v-4.938c-.0033061-2.76005315-2.2399468-4.99669388-5-5h-27c-.2651948.00005664-.5195073.10545063-.707.293l-13 13c-.18754937.1874927-.29294336.4418052-.293.707v29c0 .5522847.44771525 1 1 1s1-.4477153 1-1v-28h8c2.7600532-.0033061 4.9966939-2.2399468 5-5v-8h26c1.6568542 0 3 1.34314575 3 3v4.938c-.2265805.118395-.4258571.2829259-.585.483l-7.969 10.359c-.4648847.6038939-.5461601 1.4195059-.2095895 2.1032645.3365706.6837587 1.0324835 1.1168106 1.7945895 1.1167355h2.969v8.036c-2.0289252.8891847-3.7660443 2.3323937-5.012 4.164-1.2777798-.688627-2.7064739-1.0494083-4.158-1.05-4.6502555-.0786277-8.487525 3.6199993-8.58 8.27.0014189 1.0429338.2051843 2.0756848.6 3.041-2.3424917 1.2385948-3.819752 3.6593831-3.85 6.309.0009251.4125035.0384051.8241136.112 1.23h-14.112c-1.65685425 0-3-1.3431458-3-3 0-.5522847-.44771525-1-1-1s-1 .4477153-1 1c.00330612 2.7600532 2.23994685 4.9966939 5 5h14.812c1.3021307 2.4826769 3.8847011 4.0272764 6.688 4h26c4.0652284.0685868 7.41956-3.1649889 7.5-7.23-.022792-2.7178626-1.5741326-5.1912666-4.011-6.395zm-45.989-33.375h-6.586l9.586-9.586v6.586c0 1.6568542-1.3431458 3-3 3zm27.031 9 7.969-10.36 7.969 10.36h-2.969c-1.1045695 0-2 .8954305-2 2v21h-6v-21c0-1.1045695-.8954305-2-2-2zm15.469 36h-26c-2.2392108.0179433-4.2688701-1.3143783-5.143-3.376-.2380639-.5890132-.3593143-1.2187004-.357-1.854.021157-2.2146836 1.4427787-4.1729255 3.542-4.879.2773347-.1008183.4959814-.3189803.597415-.5960906.1014335-.2771103.0752965-.584873-.071415-.8409094-.5352204-.9215976-.817412-1.9682595-.818-3.034.091668-3.5457415 3.0339629-6.3494177 6.58-6.27 1.4023371.0002504 2.7703638.4336742 3.917 1.241.2335156.1606817.523672.2161741.8.153.276524-.0647208.5124865-.2439651.649-.493.8843883-1.5953695 2.2035278-2.9068799 3.804-3.782v10.731c0 1.1045695.8954305 2 2 2h6c1.1045695 0 2-.8954305 2-2v-10.646c2.9148594 1.622971 4.7299075 4.6898291 4.75 8.026-.0027233 1.4154499-.339522 2.8102693-.983 4.071-.1312369.2592533-.1432161.5627699-.0328202.8315601.110396.2687901.3322483.4762688.6078202.5684399 2.1497627.6831341 3.6225199 2.6635858 3.658 4.919-.0801662 2.9605146-2.5392002 5.2988324-5.5 5.23z'
                        />
                        <circle id='Oval' cx='1' cy='47' r='1' />
                      </g>
                    </g>
                  </g>
                </svg>
                <div className='upload-card-subtitle'>
                  Press and select your file here
                </div>
              </div>
            </div>
            {/* Start of form  */}
            <div className='upload-form-row'>
              <div className='upload-form-col'>
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
              </div>
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
