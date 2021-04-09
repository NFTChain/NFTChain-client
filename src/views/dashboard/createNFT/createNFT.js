import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
// dependency for validation: https://www.npmjs.com/package/react-images-upload
const CreateNFT = () => {
  const [images, setImages] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = (picture) => {
    console.log('drop', picture);
    setImages(images.concat(picture));
  };

  // const yeah = (file) => {
  //   console.log('yeah', file);
  // };

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
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={['.jpg', 'png', '.gif', '.gif']}
        maxFileSize={5242880}
        withPreview={true}
      />
      <button onClick={uploadImages}>Upload maaaaan</button>
      {uploadedImage && (
        <div style={{ width: '200px', height: '200px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={`http://localhost:5000/nft/${uploadedImage}`}
            alt="just a test"
          />
        </div>
      )}
    </div>
  );
};

export default CreateNFT;
