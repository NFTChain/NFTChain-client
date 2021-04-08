import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
// dependency for validation: https://www.npmjs.com/package/react-images-upload
const CreateNFT = () => {
  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    console.log('drop', picture);
    setPictures(pictures.concat(picture));
  };

  const yeah = (file) => {
    console.log('yeah', file);
  };

  return (
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={onDrop}
      imgExtension={['.jpg', 'png', '.gif', '.gif']}
      maxFileSize={5242880}
      onChange={yeah}
      withPreview={true}
    />
  );
};

export default CreateNFT;
