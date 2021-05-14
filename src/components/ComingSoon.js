import React from 'react';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import { H1 } from './Headings';

const ComingSoon = () => {
  return (
    <div className='coming-soon'>
      <AccessAlarmsIcon
        className='coming-soon__icon'
        style={{ fontSize: '4rem' }}
      />
      <H1 text='Coming Soon' style={{ color: '#565656' }} />
    </div>
  );
};

export default ComingSoon;
