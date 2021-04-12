import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Chart } from 'react-google-charts';

const Download = () => {
  const theme = useTheme();

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
          Team tokens will be locked for 3 months.
        </Box>
        <Box align={'center'}>
          <Chart
            width={'100%'}
            height={'300px'}
            chartType='PieChart'
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
          50% of the collected funds will go into the liquidty pool, locked for
          over 1 year. The Rest of the funds will go into marketing.
        </Typography>
      </Box>
    </Box>
  );
};

export default Download;
