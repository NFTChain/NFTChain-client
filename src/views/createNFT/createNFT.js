/* eslint no-unused-vars: 0 */ // --> OFF
import React, { useState, useEffect } from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
// dependency for validation: https://www.npmjs.com/package/react-images-upload
import getBlockchain from 'utils/getBlockchain';

const CreateNFT = () => {
  const [images, setImages] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(undefined);
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    const init = async () => {
      const { signerAddress, token } = await getBlockchain();
      setToken(token);
      console.log(signerAddress, token);
    };
    init();
  }, []);

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

  const createNFT = async () => {
    const createNFT = await token.createInk(uploadedImage, 2);
    console.log(createNFT);
  };

  if (!token) return <h1>Please connect to Metamask</h1>; // metamask hardhat transaction issue (https://hardhat.org/metamask-issue.html)
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
      {images.length !== 0 && (
        <button onClick={uploadImages}>Upload file</button>
      )}
      {uploadedImage && (
        <div style={{ width: '200px', height: '200px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={`http://localhost:5000/nft/${uploadedImage}`}
            alt='just a test'
          />
        </div>
      )}
      {uploadedImage && <button onClick={createNFT}>Create NFT</button>}
    </div>
  );
};

export default CreateNFT;
