import React from 'react';
import { Box } from '@material-ui/core';
import logo from '../../assets/onlyLogo.png';

const Litepaper = () => {
  return (
    <Box>
      <div style={{ width: '100%', height: '100%' }}>
        <img src={logo} alt='NFTChain logo' />
      </div>
    </Box>
  );
};

export default Litepaper;
