import React from 'react';
import styled from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const SearchStyled = styled.div`
  display: flex;

  .iconDiv {
    border: 1px solid #ced4da;
    border-left: none;
    margin-left: -0.5rem;
    height: 2.55rem;
    margin-top: 0.5rem;
    padding: 10px 26px 10px 12px;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
`;

const BootstrapInput = withStyles(theme => ({
  input: {
    minWidth: 130,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    border: '1px solid #ced4da',
    borderRight: 'none',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'box-shadow',
    ]),
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    marginTop: '-0.5rem',
  },
  inputLabel: {
    marginTop: '-1.4rem',
    padding: '1rem',
    color: 'black',
  },
}));

const SearchForKeyword = props => {
  const classes = useStyles();
  return (
    <SearchStyled>
      <FormControl className={classes.margin}>
        <BootstrapInput
          placeholder='Search for Keyword'
          className='keyword'
          inputProps={{ 'aria-label': 'description' }}
          onChange={props.searchForKeyword}
          input={<SearchIcon />}
        />
      </FormControl>
      <div className='iconDiv'>
        <i className='fas fa-search'></i>
      </div>
    </SearchStyled>
  );
};

export default SearchForKeyword;
