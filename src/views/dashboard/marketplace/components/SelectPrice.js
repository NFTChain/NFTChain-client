import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

const SelectPriceDiv = styled.div`
  margin-right: 1rem;
`;

const BootstrapInput = withStyles(theme => ({
  input: {
    minWidth: 130,
    borderRadius: 20,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'box-shadow',
    ]),
    '&:focus': {
      borderRadius: 20,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  inputLabel: {
    marginTop: '-1.6rem',
    padding: '1rem',
    color: 'black',
  },
}));

const SelectPrice = props => {
  const classes = useStyles();

  return (
    <SelectPriceDiv>
      <FormControl className={classes.margin}>
        <InputLabel
          className={classes.inputLabel}
          htmlFor='grouped-select'
        >
          Price
        </InputLabel>
        <Select
          defaultValue=''
          input={
            <BootstrapInput
              onChange={e => props.searchForPrice(e.target.value)}
              name='price'
              id='price-select'
            />
          }
        >
          <MenuItem value={1000}>All</MenuItem>
          <MenuItem value={20}>under 20$</MenuItem>
          <MenuItem value={40}>under 40$</MenuItem>
          <MenuItem value={60}>under 60$</MenuItem>
          <MenuItem value={80}>under 80$</MenuItem>
          <MenuItem value={100}>under 100$</MenuItem>
        </Select>
      </FormControl>
    </SelectPriceDiv>
  );
};

export default SelectPrice;
