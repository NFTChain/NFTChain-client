/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typed from 'react-typed';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import bsc from './bsc.svg';
import { colors } from '@material-ui/core';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${theme.palette.primary.dark} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position='relative' zIndex={2}>
        <Box marginBottom={2}>
          <Typography
            variant='h2'
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            NFTChain
            <br />A revolutionary marketplace
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography variant='h6' align={'center'} color={'textSecondary'}>
            Turn every file you could think of, into a NFT
            <br />
            We support Songs, Videos, Images and even 3D assets
            <br />
            Join us on our mission to make NFT's mainstream!
          </Typography>
        </Box>
        <Box
          marginBottom={{ xs: 4, sm: 6, md: 8 }}
          display='flex'
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent={'center'}
          alignItems={{ xs: 'center', sm: 'center' }}
        >
          <Box maxWidth={90} marginTop={2} marginRight={4}>
            <Box
              component='img'
              height={'100%'}
              width={'100%'}
              src={bsc}
              alt='...'
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          </Box>
        </Box>
        <Box
          component={Card}
          bgcolor={colors.blueGrey[800]}
          padding={4}
          maxWidth={600}
          margin={'0 auto'}
          boxShadow={3}
        >
          <Typography color={theme.palette.common.white}>
            {'~$ > '}
            <Typed
              strings={[
                'Create your unqiue NFT',
                'And offer it to the world',
                'In under one minute!',
              ]}
              typeSpeed={70}
              loop={true}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
