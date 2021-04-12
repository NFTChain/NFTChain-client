/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const GridItemHeadlineBlock = () => (
    <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
      <Typography
        variant='h3'
        align='left'
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Create, buy, sell your NFT's online!
      </Typography>
      <Typography component='p' color='textSecondary'>
        The protocol is built on top of the Binance Smart Chain to provide low
        transaction fees to our end users.
      </Typography>
    </Box>
  );

  const GridItemVideoBlock = () => {
    return (
      <Box maxHeight={300} position={'relative'}>
        <Box
          component={LazyLoadImage}
          maxHeight={300}
          height={'100%'}
          width={'100%'}
          src={'https://assets.maccarianagency.com/backgrounds/img2.jpg'}
          alt='...'
          effect='blur'
          boxShadow={4}
          borderRadius={1.5}
          sx={{
            objectFit: 'cover',
          }}
        />
        <Box
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          color={theme.palette.primary.main}
          zIndex={2}
          sx={{
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
        >
          <svg
            width={80}
            height={80}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
              clipRule='evenodd'
            />
          </svg>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height='100%' display='flex' alignItems='center'>
            <GridItemVideoBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height='100%' display='flex' alignItems='center'>
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
