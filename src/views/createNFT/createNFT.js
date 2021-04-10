import React, { useState, useEffect } from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
// dependency for validation: https://www.npmjs.com/package/react-images-upload
import getBlockchain from 'utils/getBlockchain';
import Box from '@material-ui/core/Box';

const CreateNFT = () => {
  const [images, setImages] = useState(undefined);
  const [uploadedImage, setUploadedImage] = useState(undefined);
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { token } = await getBlockchain();
      setToken(token);
      console.log(token);
    };
    init();
  }, []);

  const interactWithBlockchain = async () => {
    const createNFT = await token.createInk('');
    console.log(createNFT);
  };

  const onDrop = (picture) => {
    console.log('drop', picture);
    setImages(images.concat(picture));
  };

  const uploadImages = async () => {
    const formData = new FormData();
    formData.append('image', images[0]);

    const result = await axios.post(
      'http://localhost:5000/nft/upload',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    );

    setUploadedImage(result.data.imagePath);
  };

  if (!token) return <Box>You need to connect to Metamask</Box>; // metamask hardhat transaction issue (https://hardhat.org/metamask-issue.html)
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
      <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={onDrop}
        imgExtension={['.jpg', 'png', '.gif', '.gif']}
        maxFileSize={5242880}
        withPreview={true}
      />
      {images && <button onClick={uploadImages}>Upload file</button>}
      {uploadedImage && (
        <div style={{ width: '200px', height: '200px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={`http://localhost:5000/nft/${uploadedImage}`}
            alt='just a test'
          />
        </div>
      )}
      {uploadedImage && (
        <button onClick={interactWithBlockchain}>LETS GOOO BABY </button>
      )}
    </div>
  );
};

export default CreateNFT;
