/* eslint-disable indent */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Button } from 'components';

const ErrorPage = ({ error }) => {
  return (
    <div className='error__page'>
      <section className='error__page-content container'>
        <h1 className='error__page-title '>Oops something went wrong.</h1>
        <h3 className='error__page-message'>
          {error === 'wrong-network' ? (
            <p>
              You are on the wrong network. Please connect to the Mumbai Testnet
              network via you MetaMask wallet and refresh this page. Here is a
              tutorial how you can connect to the Mumbai Testnet:{' '}
              <a
                target='_blank'
                href='https://blog.pods.finance/guide-connecting-mumbai-testnet-to-your-metamask-87978071aca8'
              >
                https://blog.pods.finance/guide-connecting-mumbai-testnet-to-your-metamask-87978071aca8
              </a>
              <br />
              <br />
              To be able to use the platform fully you will need to send some
              fake Matic tokens to your wallet here:{' '}
              <a target='_blank' href='https://faucet.matic.network/'>
                https://faucet.matic.network/
              </a>
              <br />
              <br />
              To be able to buy a NFT on the marketplace you will need some of
              our own created tokens $NFTC. Please reach out to the admins in
              the Telegram channel and ask for the $NFTC token:
              <a target='_blank' href='https://t.me/NFT_Chain'>
                https://t.me/NFT_Chain
              </a>
            </p>
          ) : (
            error
          )}
        </h3>

        <Button
          className='button--blue'
          text={'Refresh'}
          onClick={() => window.location.reload()}
        ></Button>
      </section>
    </div>
  );
};

export default ErrorPage;
