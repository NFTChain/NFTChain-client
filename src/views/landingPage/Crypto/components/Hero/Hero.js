/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { colors } from '@material-ui/core';
import bsc from './bsc.svg';
const Hero = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Box display={'flex'} alignItems={'center'} marginBottom={1}>
        <Box
          marginRight={1}
          paddingX={1}
          paddingY={1 / 4}
          bgcolor={colors.red[500]}
          borderRadius={1}
          color={theme.palette.common.white}
        >
          <Typography variant={'subtitle2'}>NFT</Typography>
        </Box>
        <Button>Chain</Button>
      </Box>
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
      <Typography
        variant='h6'
        component='p'
        color='textPrimary'
        sx={{ fontWeight: 400 }}
      >
        Where you can create, sell and buy different kinds of NFT's. Our
        protocol will support Images, Music & Videos.
      </Typography>
    </Box>
  );

  const GridItemFormBlock = () => {
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    useEffect(() => {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    });

    return (
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={'100%'}
        component={Card}
        borderRadius={2}
        boxShadow={4}
      >
        <Box
          display='flex'
          flexDirection={'row'}
          justifyContent={'space-around'}
        >
          <Box display='flex' flexDirection={'column'} alignItems={'center'}>
            <Typography variant={'h3'} sx={{ fontWeight: 700 }}>
              00
            </Typography>
            <Typography color='text.secondary' sx={{ fontWeight: 700 }}>
              Days
            </Typography>
          </Box>
          <Box display='flex' flexDirection={'column'} alignItems={'center'}>
            <Typography variant={'h3'} sx={{ fontWeight: 700 }}>
              00
            </Typography>
            <Typography color='text.secondary' sx={{ fontWeight: 700 }}>
              Hours
            </Typography>
          </Box>
          <Box display='flex' flexDirection={'column'} alignItems={'center'}>
            <Typography variant={'h3'} sx={{ fontWeight: 700 }}>
              {minutes}
            </Typography>
            <Typography color='text.secondary'>Minutes</Typography>
          </Box>
          <Box display='flex' flexDirection={'column'} alignItems={'center'}>
            <Typography variant={'h3'} sx={{ fontWeight: 700 }}>
              {seconds}
            </Typography>
            <Typography color='text.secondary' sx={{ fontWeight: 700 }}>
              Seconds
            </Typography>
          </Box>
        </Box>
        <Box marginY={4}>
          <Button
            sx={{ height: 54 }}
            variant='contained'
            color='primary'
            size='medium'
            fullWidth
          >
            Buy now
          </Button>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Hidden smDown>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'flex-start'}
            >
              <Box>
                <h3>Coming Soon ==></h3>
              </Box>
            </Box>
          </Hidden>
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            width={{ xs: '100%', sm: 'auto' }}
          >
            <Box
              component={Avatar}
              variant={'rounded'}
              bgcolor={theme.palette.common.black}
              width={{ xs: '50%', sm: 50 }}
              height={50}
            >
              <img
                src={
                  'https://assets.maccarianagency.com/svg/icons/app-store-icon.svg'
                }
                alt={'app store'}
              />
            </Box>
            <Box
              component={Avatar}
              variant={'rounded'}
              bgcolor={theme.palette.common.black}
              marginLeft={1}
              width={{ xs: '50%', sm: 50 }}
              height={50}
            >
              <img
                src={
                  'https://assets.maccarianagency.com/svg/icons/play-store-icon.svg'
                }
                alt={'play store'}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  const GridItemPartnersBlock = () => (
    <Box display='flex' flexWrap='wrap' justifyContent={'center'}>
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
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height='100%' display='flex' alignItems='center'>
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height='100%' display='flex' alignItems='center'>
            <GridItemFormBlock />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <GridItemPartnersBlock />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
