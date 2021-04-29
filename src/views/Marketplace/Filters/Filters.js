import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '../../../components/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filters = () => {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className='filters'>
      <div className='filters__row'>
        <div className='filters__box-1'>
          <FormControl className={classes.formControl}>
            <InputLabel id='filters__box-1-label'>Sort by</InputLabel>
            <Select
              labelId='filters__box-1-label'
              id='filters__select'
              value={filter}
              onChange={handleChange}
            >
              <MenuItem value={'Recently added'}>Recently added</MenuItem>
              <MenuItem value={'Cheapest'}>Cheapest</MenuItem>
              <MenuItem value={'Highest price'}>Highest Price</MenuItem>
              <MenuItem value={'Most liked'}>Most liked</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='filters__box-2'>
          <ul className='filters__list'>
            <li className='filter__item'>All items</li>
            <li className='filter__item'>Art</li>
            <li className='filter__item'>Game</li>
            <li className='filter__item'>Photography</li>
            <li className='filter__item'>Music</li>
            <li className='filter__item'>Video</li>
          </ul>
        </div>
        <div className='filters__box-3'>
          <Button text={'Filter'} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
