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
              You are on the wrong network. Please connect to the Matic mainnet
              network via you MetaMask wallet and refresh this page. Here is a
              tutorial how you can connect to the Matic mainnet network:{' '}
              <a
                target='_blank'
                href='https://docs.matic.network/docs/develop/metamask/config-matic/'
              >
                https://docs.matic.network/docs/develop/metamask/config-matic/
              </a>
              <br />
              <br />
              To be able to create NFTs you will need to have some Matic tokens
              in your wallet to cover the GAS costs of the transaction: <br />
              <br />
              To be able to buy an NFT on the marketplace you will need to have
              our token $NFTC which you can get here (we will add a fiat gateway
              soon!):
              <a
                target='_blank'
                href=' https://quickswap.exchange/#/swap?outputCurrency=0x0cab7cb67e909c373350d5532c3ce50a11bd6e7c
'
              >
                https://quickswap.exchange/#/swap?outputCurrency=0x0cab7cb67e909c373350d5532c3ce50a11bd6e7c
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
