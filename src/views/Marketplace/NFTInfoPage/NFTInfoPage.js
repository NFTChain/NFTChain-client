/* eslint  no-unused-vars: 0 */ // --> OFF
/* eslint  no-undef: 0 */ // --> OFF

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { connectToContract } from '../../../store/actions/contractActions';
import { utils } from 'ethers';
import ConnectWallet from 'views/ConnectWallet';
import { marginTopAndBottom } from 'utils/globalStyles';
import { H1, ComingSoon, Text, Button } from 'components';
import ArtistAndOwner from './components/ArtistAndOwner';

const NFTInfoPage = ({
  BEP20Contract,
  BEP721Contract,
  signerAddress,
  currentNFT,
  isConnected,
}) => {
  const {
    image,
    title,
    id,
    description,
    price,
    artist,
    owner,
    limit,
    count,
    artistAddress,
  } = currentNFT;

  const [pressedBuy, setPressedBuy] = useState(false);
  const [currentInfoView, setCurrentInfoView] = useState(1);
  const [currentInfoComponent, setCurrentInfoComponent] = useState(
    <ArtistAndOwner
      artist={artistAddress}
      owner={owner === artist ? artistAddress : owner}
    />,
  );

  const buyNFT = async () => {
    if (BEP20Contract && BEP721Contract && signerAddress) {
      await tryBuyingNFT();
      debugger;
    } else {
      setPressedBuy(true);
    }
  };

  const tryBuyingNFT = async () => {
    try {
      // only for unminted NFT's
      const parsedEtherPrice = utils.parseEther(price);
      const approveBuy = await BEP20Contract.approve(
        BEP721Contract.address,
        parsedEtherPrice,
      );
      await approveBuy.wait();
      const ipfs_hash = image.split('https://ipfs.io/ipfs/')[1];
      const tryToBuy = await BEP721Contract.buyInk(ipfs_hash);
      await tryToBuy.wait();
    } catch (error) {
      debugger;
      console.log(error);
    }
  };

  const handleInfoViewChange = (event) => {
    // used for displaying different info and showing which info is open
    switch (event.target.textContent) {
      case 'Info':
        setCurrentInfoView(1);
        setCurrentInfoComponent(ArtistAndOwner);

        return;
      case 'Chat':
        setCurrentInfoView(2);
        setCurrentInfoComponent(ComingSoon);

        return;
      case 'Owner':
        setCurrentInfoView(3);
        setCurrentInfoComponent(ComingSoon);

        return;
      case 'History':
        setCurrentInfoView(4);
        setCurrentInfoComponent(ComingSoon);
    }
  };

  if (pressedBuy && !isConnected) {
    return <ConnectWallet />;
  }

  return (
    <div className='info-page'>
      <div className='info-page__image-container'>
        <img src={image} alt='NFT art' />
      </div>
      <div className='info-page__info-container'>
        <H1 text={title} />
        <div className='info-page__price-limit' style={marginTopAndBottom}>
          <Text
            text={`${price}0 NFT`}
            style={{
              borderRadius: '3px',
              color: '#00ab55',
              border: '2px solid #00ab55',
              fontWeight: 900,
              padding: '0.3rem',
              marginRight: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1rem',
            }}
          />
          <Text
            text={`$ ${price * 0.1}`}
            style={{
              borderRadius: '3px',
              color: '#00ab55',
              border: '2px solid #00ab55',
              fontWeight: 900,
              padding: '0.3rem',
              marginRight: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1rem',
            }}
          />
          <Text
            text={`${limit - count} of ${limit}`} // this logic works for only for unminted NFT - Take care of minted NFT!!!
            style={
              {
                // borderRadius: '3px',
                // fontSize: '1rem',
                // color: '#00ab55',
                // border: '2px solid #00ab55',
                // fontWeight: 900,
                // padding: '0.3rem',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
              }
            }
          />
        </div>
        <Text text={description} />
        <div className='info-page__info-navigator'>
          <Button
            onClick={handleInfoViewChange}
            text={'Info'}
            style={{
              backgroundColor: currentInfoView === 1 ? '#959595' : '#FFFFFF',
              color: currentInfoView === 1 ? '#FFF' : '#959595',
            }}
          />
          <Button
            onClick={handleInfoViewChange}
            text={'Chat'}
            style={{
              backgroundColor: currentInfoView === 2 ? '#959595' : '#FFFFFF',
              color: currentInfoView === 2 ? '#FFF' : '#959595',
            }}
          />
          <Button
            onClick={handleInfoViewChange}
            text={'Owner'}
            style={{
              backgroundColor: currentInfoView === 3 ? '#959595' : '#FFFFFF',
              color: currentInfoView === 3 ? '#FFF' : '#959595',
            }}
          />
          <Button
            onClick={handleInfoViewChange}
            text={'History'}
            style={{
              backgroundColor: currentInfoView === 4 ? '#959595' : '#FFFFFF',
              color: currentInfoView === 4 ? '#FFF' : '#959595',
            }}
          />
        </div>
        {currentInfoComponent}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
    BEP20Contract: state.contracts.BEP20Contract,
    signerAddress: state.contracts.signerAddress,
    currentNFT: state.marketplace.currentNFT,
    isConnected: state.ui.isConnected,
  };
};

export default connect(mapStateToProps, { connectToContract })(NFTInfoPage);
