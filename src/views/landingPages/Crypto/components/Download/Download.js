import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Chart } from 'react-google-charts';

const Download = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

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
          align={'center'}
        >
          Tokenomics
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Team tokens will be locked for multiple months.
        </Box>
        <Box align={'center'}>
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Reason', 'Percentage of token supply'],
              ['Token Sale', 70],
              ['Team', 10],
              ['Development', 10],
              ['Marketing', 10],
            ]}
            options={{
              is3D: true,
              backgroundColor: theme.palette.alternate.main,
              legend: { position: 'top', maxLines: 3, alignment: 'center' },
            }}
            rootProps={{ 'data-testid': '2' }}
          />
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Depending on the amount we collect during the presale, over 50% of the
          collected funds will go into the liquidty pool, locked for over 1
          year. Rest of the funds will go into marketing and artists to boost
          the activity on our NFT marketplace.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
      >
        <Box
          component={Button}
          variant="outlined"
          color="primary"
          size="large"
          fullWidth={isSm ? false : true}
        >
          Contact sales
        </Box>
        <Box
          component={Button}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isSm ? false : true}
          marginTop={{ xs: 1, sm: 0 }}
          marginLeft={{ sm: 2 }}
        >
          Download
        </Box>
      </Box>
    </Box>
  );
};

export default Download;
