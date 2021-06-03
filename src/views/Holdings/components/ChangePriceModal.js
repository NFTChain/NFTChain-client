import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import FormInput from 'components/FormInput';
import { Button, Text } from 'components';
import { marginBottom } from 'utils/globalStyles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function ChangePriceModal({
  title,
  NFTId,
  ipfsHash,
  onClick,
  currentPrice,
  uniqueId,
}) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [price, setPrice] = useState(currentPrice);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={{
        ...modalStyle,
        width: '30%',
        borderRadius: '16px',
        background: '#eee',
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <Text
        text=' Please type into the input the price you want to set and click Set Price'
        style={marginBottom}
      />

      <FormInput
        type='number'
        placeholder='The price in NFTC'
        value={price}
        onChange={handlePriceChange}
        style={marginBottom}
      />
      <Button
        onClick={() => onClick(NFTId ? NFTId : ipfsHash, price, uniqueId)} // ternary operator because we need to differentiate between unminted and minted nft
        text={title}
      />
    </div>
  );

  return (
    <div>
      <Button text={title} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}
