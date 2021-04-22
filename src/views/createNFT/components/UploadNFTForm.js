import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const UploadNFTForm = () => {
  const { register, handleSubmit } = useForm();

  const [fileType, setFileType] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [artist, setArtist] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [limit, setLimit] = React.useState('');

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

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('file', data.picture[0]);

    const res = await fetch('http://localhost:4000/picture', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(res));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type='file' name='file' />
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
      <button>Submit</button>
    </form>
  );
};

export default UploadNFTForm;
