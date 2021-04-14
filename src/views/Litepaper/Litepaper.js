import React from 'react';
import logo from '../../assets/onlyLogo.png';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Litepaper = () => {
  return (
    <Box>
      <Box
        className='first-site'
        style={{ width: '100vw', height: '100vh', backgroundColor: '#1A2138' }}
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
            <Typography
              variant='h2'
              align='left'
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              A revolutionary marketplace
            </Typography>
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
          <h1>NFTChain Introduction</h1>
        </Box>
        <Box>
          <h2>NFTChain Network</h2>
          <p>
            Nftchain is a decentralized marketplace where 3D artists, musicians,
            basically every content creator can turn their file into a unique or
            of number limited NFT and
          </p>
        </Box>
        <Box>
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
