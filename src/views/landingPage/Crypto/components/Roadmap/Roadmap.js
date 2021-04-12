import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Roadmap = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const timeline = [
    {
      date: 'January 2021',
      title: 'Birth of NFTChain',
    },
    {
      date: 'Febuary 2021',
      title: 'Marketplace & tokenization platform PoC',
    },
    {
      date: 'March 2021',
      title: 'Development',
    },
    {
      date: 'April 2021',
      title: 'Token sale',
    },
    {
      date: 'May 2021',
      title: 'Beta launch of Marketplace & NFT tokenization platform (website)',
    },
    {
      date: 'May 2021',
      title: 'Start of IOS and Android development',
    },
    {
      date: 'June 2021',
      title: 'Beta launch of Marketplace & NFT tokenization platform (mobile)',
    },
    {
      date: 'July 2021',
      title: 'v.2 Marketplace & Staking',
    },
  ];

  const TimeLineMobileView = ({ timeline = [] }) => (
    <Grid container spacing={2}>
      {timeline.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Box display={'flex'} alignItems={'center'} data-aos={'fade-up'}>
            <Box
              width={10}
              height={10}
              borderRadius={'100%'}
              bgcolor={theme.palette.primary.main}
              marginRight={2}
            />
            <Box>
              <Typography
                variant={'subtitle1'}
                color={'textSecondary'}
                gutterBottom
              >
                {item.date}
              </Typography>
              <Typography variant={'h6'}>{item.title}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  TimeLineMobileView.propTypes = {
    timeline: PropTypes.array.isRequired,
  };

  const TimeLineDesktopView = ({ timeline = [] }) => (
    <Grid container spacing={2}>
      {timeline.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Box
            paddingBottom={4}
            display={'flex'}
            alignItems={'center'}
            flexDirection={i % 2 === 1 ? 'row-reverse' : 'row'}
            marginRight={i % 2 === 1 ? 'calc(50% - 5px)' : 0}
            marginLeft={i % 2 !== 1 ? 'calc(50% - 5px)' : 0}
            data-aos={i % 2 === 1 ? 'fade-right' : 'fade-left'}
          >
            <Box
              width={10}
              height={10}
              borderRadius={'100%'}
              bgcolor={theme.palette.primary.main}
              marginRight={i % 2 !== 1 ? 5 : 0}
              marginLeft={i % 2 === 1 ? 5 : 0}
            />
            <Box>
              <Typography
                variant={'subtitle1'}
                color={'textSecondary'}
                gutterBottom
              >
                {item.date}
              </Typography>
              <Typography variant={'h6'}>{item.title}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  TimeLineDesktopView.propTypes = {
    timeline: PropTypes.array.isRequired,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={isSm ? 'center' : 'left'}
        >
          Roadmap
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={isSm ? 'center' : 'left'}
          gutterBottom
        >
          Roadmap for the next months.
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={isSm ? 'center' : 'left'}
        >
          Throughout the next months are contests and other various marketing
          strategies planned.
        </Typography>
      </Box>
      {isSm ? (
        <TimeLineDesktopView timeline={timeline} />
      ) : (
        <TimeLineMobileView timeline={timeline} />
      )}
    </Box>
  );
};

export default Roadmap;
