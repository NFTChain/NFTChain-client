import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

const SelectExperienceDiv = styled.div`
  margin-left: 2rem;
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

const SelectExperience = props => {
  const classes = useStyles();

  return (
    <SelectExperienceDiv>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.inputLabel}
          htmlFor='grouped-select'
        >
          Experience
        </InputLabel>
        <Select
          defaultValue=''
          input={
            <BootstrapInput
              onChange={e =>
                props.searchForExperience(e.target.value)
              }
              name='experience'
              id='experience-select'
            />
          }
        >
          <MenuItem value={1000}>All</MenuItem>
          <MenuItem value={1}>Beginner</MenuItem>
          <MenuItem value={2}>Advanced</MenuItem>
          <MenuItem value={3}>Expert</MenuItem>
        </Select>
      </FormControl>
    </SelectExperienceDiv>
  );
};

export default SelectExperience;
