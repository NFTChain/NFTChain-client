/* eslint  no-unused-vars: 0 */
/* eslint  no-undef: 0 */
/* eslint-disable quotes */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { connectToContract } from '../../../store/actions/contractActions';
import { utils } from 'ethers';
import ConnectWallet from 'views/ConnectWallet';
import { marginTopAndBottom } from 'utils/globalStyles';
import { H1, ComingSoon, Text, Button } from 'components';
import ArtistAndOwner from './components/ArtistAndOwner';
import BuyContainer from './components/BuyContainer';
import { createNotification } from 'utils/createNotification';
import { startAction, stopAction } from 'store/actions/uiActions';
import Loader from 'views/Loader';
import { withRouter } from 'react-router-dom';

const NFTInfoPage = ({
  BEP20Contract,
  BEP721Contract,
  signerAddress,
  currentNFT,
  isConnected,
  loading,
  startAction,
  stopAction,
  history,
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
    isToken,
  } = currentNFT;

  const [pressedBuy, setPressedBuy] = useState(false);
  const [currentInfoView, setCurrentInfoView] = useState(1);
  const [currentInfoComponent, setCurrentInfoComponent] = useState(
    <ArtistAndOwner
      artist={artist}
      owner={owner === artist ? artist : owner}
    />,
  );

  const buyNFT = async () => {
    if (BEP20Contract && BEP721Contract && signerAddress) {
      await tryBuyingNFT();
    } else {
      createNotification(
        'error',
        'You need first to connect your wallet. After connecting, please press buy again.',
        6000,
      )();
      setPressedBuy(true);
    }
  };

  const tryBuyingNFT = async () => {
    startAction();
    try {
      const parsedEtherPrice = utils.parseEther(price);
      const approveBuy = await BEP20Contract.approve(
        BEP721Contract.address,
        parsedEtherPrice,
      );
      await approveBuy.wait();

      // if its a minted NFT
      if (isToken) {
        const tryToBuy = await BEP721Contract.buyToken(id);
        await tryToBuy.wait();

        // if its unminted NFT
      } else {
        const ipfs_hash = image.split('https://ipfs.io/ipfs/')[1];
        const tryToBuy = await BEP721Contract.buyInk(ipfs_hash);
        await tryToBuy.wait();
        createNotification(
          'success',
          'Congrats, you bought successful your NFT!',
          4000,
        )();
        history.push('/holdings');
      }
    } catch (error) {
      if (error.data?.message?.includes('transfer amount exceeds balance')) {
        // why the ?: Javascripts optional chaining feature https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        createNotification(
          'error',
          `Your don't have enough funds in your wallet to cover the costs for this transaction.`,
        )();
      } else if (error.message?.includes('User denied')) {
        // when user denies transaction
        createNotification('error', 'You denied the transaction.')();
      }
      debugger;
      console.log(error);
    } finally {
      stopAction();
    }
  };

  const handleInfoViewChange = (event) => {
    // used for displaying different info and showing which info is open
    switch (event.target.textContent) {
      case 'Info':
        setCurrentInfoView(1);
        setCurrentInfoComponent(
          <ArtistAndOwner
            artist={artist}
            owner={owner === artist ? artist : owner}
          />,
        );

        return;
      case 'Chat':
        setCurrentInfoView(2);
        setCurrentInfoComponent(<ComingSoon />);

        return;
      case 'Owner':
        setCurrentInfoView(3);
        setCurrentInfoComponent(<ComingSoon />);

        return;
      case 'History':
        setCurrentInfoView(4);
        setCurrentInfoComponent(<ComingSoon />);
    }
  };

  if (pressedBuy && !isConnected) {
    return <ConnectWallet />;
  } else if (loading) {
    return <Loader />;
  }

  return (
    <div className='info-page container'>
      <div className='info-page__image-container'>
        <img src={image} alt='NFT art' />
      </div>
      <div className='info-page__info-container'>
        <H1
          text={title}
          style={{
            color: '#434343',
            fontSize: '4rem',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        />
        <div className='info-page__price-limit' style={marginTopAndBottom}>
          <Text
            text={`${price}0 NFTC`}
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
            text={`$${Math.ceil(price * 0.1)}.00`} // later we need to make an api call to get the current price of our token and make the calculation
            style={{
              borderRadius: '3px',
              // color: '#00ab55',
              border: '2px solid',
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
          />
        </div>
        <Text
          style={{ textAlign: 'center', margin: '1rem 0' }}
          text={description}
        />
        <div className='info-page__info-navigator'>
          <Button
            className='info-page__button button'
            onClick={handleInfoViewChange}
            text={'Info'}
            style={{
              backgroundColor: currentInfoView === 1 ? '#959595' : '#FFFFFF',
              color: currentInfoView === 1 ? '#FFF' : '#959595',
            }}
          />
          <Button
            className='info-page__button button'
            onClick={handleInfoViewChange}
            text={'Chat'}
            style={{
              backgroundColor: currentInfoView === 2 ? '#959595' : '#FFFFFF',
              color: currentInfoView === 2 ? '#FFF' : '#959595',
            }}
          />
          <Button
            className='info-page__button button'
            onClick={handleInfoViewChange}
            text={'Owner'}
            style={{
              backgroundColor: currentInfoView === 3 ? '#959595' : '#FFFFFF',
              color: currentInfoView === 3 ? '#FFF' : '#959595',
            }}
          />
          <Button
            className='info-page__button button'
            onClick={handleInfoViewChange}
            text={'History'}
            style={{
              backgroundColor: currentInfoView === 4 ? '#959595' : '#FFFFFF',
              color: currentInfoView === 4 ? '#FFF' : '#959595',
            }}
          />
        </div>
        {currentInfoComponent}
        <BuyContainer buyNFT={buyNFT} />
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
    loading: state.ui.loading,
  };
};

export default connect(mapStateToProps, {
  connectToContract,
  startAction,
  stopAction,
})(withRouter(NFTInfoPage));
