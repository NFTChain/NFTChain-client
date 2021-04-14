import React from 'react';
import { Box } from '@material-ui/core';
import logo from '../../assets/onlyLogo.png';

const Litepaper = () => {
  return (
    <Box>
      <Box
        className='first-site'
        style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#FFF',
            }}
          >
            <h1 style={{ width: '100%' }}>A revolutionary NFT marketplace</h1>
          </Box>
          <img
            style={{ width: '60%', height: '70%' }}
            src={logo}
            alt='NFTChain logo'
          />
        </Box>
      </Box>
      <Box
        className='second-site'
        style={{ width: '100vw', height: '100vh', backgroundColor: '#FFF' }}
      >
        <Box>
          <H1>NFTChain Introduction</H1>

          <h2>NFTChain Network</h2>
          <p>
            Nftchain is a decentralized marketplace where 3D artists, musicians,
            basically every content creator can turn their file into a unique or
            of number limited NFT and
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Litepaper;
