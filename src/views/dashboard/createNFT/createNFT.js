import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
// dependency for validation: https://www.npmjs.com/package/react-images-upload
const CreateNFT = () => {
  const [images, setImages] = useState([]);

  const onDrop = (picture) => {
    console.log('drop', picture);
    setImages(images.concat(picture));
  };

  const yeah = (file) => {
    console.log('yeah', file);
  };

  const uploadImages = () => {
    const uploadImagesPromise = images.map((image) => {
      const data = new FormData();
      data.append('image', image, image.name);
      return axios.post('http://localhost:5000/nft/uplopadNFT', data);
    });

    axios
      .all(uploadImagesPromise)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={['.jpg', 'png', '.gif', '.gif']}
        maxFileSize={5242880}
        onChange={yeah}
        withPreview={true}
      />
      <button onClick={uploadImages}>Upload maaaaan</button>
    </div>
  );
};

export default CreateNFT;
