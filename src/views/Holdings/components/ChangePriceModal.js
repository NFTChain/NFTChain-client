import React, { useState } from 'react';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import FormInput from 'components/FormInput';
import { Button } from 'components';
import { marginBottom } from 'utils/globalStyles';

const ChangePriceModal = ({ title, NFTId, ipfsHash, onClick }) => {
  const [price, setPrice] = useState();
  const [visible, setVisible] = useState(false);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button text={title} onClick={showModal} />

      <Modal
        zIndex={10000}
        title={title}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose={true}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ width: '75%' }}>
              Please type into the input the price you want to change to and
              press the button
            </p>
            <FormInput
              type='number'
              placeholder='The price in NFTC'
              value={price}
              onChange={handlePriceChange}
              style={marginBottom}
            />
            <Button
              onClick={() => onClick(NFTId ? NFTId : ipfsHash, price)}
              text={title}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChangePriceModal;
