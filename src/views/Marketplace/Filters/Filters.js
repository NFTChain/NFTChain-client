import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
import Button from '../../../components/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  formControl: {
    minWidth: 196,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputLabel: {
    fontSize: '1.6rem',
    top: '-10px',
    color: '#959595',
  },
  menuItem: {
    fontSize: '1.6rem',
  },
}));

const FiltersRowOne = () => {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  // const valuetext = (value) => {
  //   return `${value}°C`;
  // };

  return (
    <div className='filters'>
      <div className='filters__row-1'>
        <div className='filters__box-1'>
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.inputLabel}
              id='filters__box-1-label'
            >
              Sort by
            </InputLabel>
            <Select
              labelId='filters__box-1-label'
              id='filters__select-1'
              value={filter}
              onChange={handleChange}
            >
              <MenuItem className={classes.menuItem} value={'Recently added'}>
                Recently added
              </MenuItem>
              <MenuItem className={classes.menuItem} value={'Cheapest'}>
                Cheapest
              </MenuItem>
              <MenuItem className={classes.menuItem} value={'Highest price'}>
                Highest price
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='filters__box-2'>
          <ul className='filters__list'>
            <button type='button' className='filters__item button--text'>
              All items
            </button>
            <button type='button' className='filters__item button--text'>
              Art
            </button>
            <button type='button' className='filters__item button--text'>
              Game
            </button>
            <button type='button' className='filters__item button--text'>
              Photography
            </button>
            <button type='button' className='filters__item button--text'>
              Music
            </button>
            <button type='button' className='filters__item button--text'>
              Video
            </button>
          </ul>
        </div>
        <div className='filters__box-3'>
          <Button className='button--blue' text={'Filter'} />
        </div>
      </div>

      {/* <div className='filters__row-2'>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel} id='filters__box-2-label'>
            Price
          </InputLabel>
          <Select
            labelId='filters__box-2-label'
            id='filters__select-2'
            value={filter}
            onChange={handleChange}
          >
            <MenuItem className={classes.menuItem} value={'Highest price'}>
              Highest price
            </MenuItem>
            <MenuItem className={classes.menuItem} value={'Lowest price'}>
              Lowest price
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel} id='filters__box-3-label'>
            Likes
          </InputLabel>
          <Select
            labelId='filters__box-3-label'
            id='filters__select-3'
            value={filter}
            onChange={handleChange}
          >
            <MenuItem className={classes.menuItem} value={'Most liked'}>
              Most liked
            </MenuItem>
            <MenuItem className={classes.menuItem} value={'Least liked'}>
              Least liked
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel} id='filters__box-4-label'>
            Creator
          </InputLabel>
          <Select
            labelId='filters__box-4-label'
            id='filters__select-4'
            value={filter}
            onChange={handleChange}
          >
            <MenuItem className={classes.menuItem} value={'All'}>
              All
            </MenuItem>
            <MenuItem className={classes.menuItem} value={'Verified only'}>
              Verifed only
            </MenuItem>
            <MenuItem className={classes.menuItem} value={'Not verifed'}>
              Not verifed
            </MenuItem>
          </Select>
        </FormControl>

        <div className={classes.root}>
          <Typography id='discrete-slider' gutterBottom>
            Price Range
          </Typography>
          <Slider
            defaultValue={20}
            getAriaValueText={valuetext}
            aria-labelledby='discrete-slider'
            valueLabelDisplay='auto'
            step={10}
            marks
            min={10}
            max={110}
          />
        </div>
      </div> */}
    </div>
  );
};

export default FiltersRowOne;
