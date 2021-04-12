import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WebbeeLogo from 'svg/logos/Webbee';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          display={'flex'}
          component='a'
          underline='none'
          href='/'
          title='webbee'
          height={50}
          width={65}
        >
          <WebbeeLogo height={'100%'} width={'100%'} />
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color='textSecondary'
        gutterBottom
      >
        &copy; NFTChain. 2021, All rights reserved
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color='textSecondary'
        component={'p'}
      >
        When you visit or interact with our sites, services or tools, we or our
        authorised service providers may use cookies for storing information to
        help provide you with a better, faster and safer experience and for
        marketing purposes.
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
