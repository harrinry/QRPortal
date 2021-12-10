import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';

import SEARCH_CRITERIA_CONSTANTS, { DEFAULT_CRITERION } from './crd-search-criteria-constants';
import { Input } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  searchBarWrapper: {
    display: 'flex',
    position: 'relative',
    marginRight: '24px',
    width: '600px',
    height: '40px',
    '& .MuiInputBase-root': {
      marginLeft: '24px',
      marginRight: '16px',
      '&::before': {
        borderBottom: '0px !important',
      },
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'white',
      },
      '& input': {
        color: 'white',
      },
    },
    backgroundColor: alpha('#ffffff', 0.15),
    '&:hover': {
      backgroundColor: alpha('#ffffff', 0.25),
    },
    borderRadius: '4px',
    '& .MuiSelect-root': {
      color: 'white',
    },
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputAdornment: {
    color: 'white',
    cursor: 'pointer',
  },
  input: {
    'flexGrow': 1,
  },
}));
  
const Search = (props = {}) => {
  const [searchCriterion, setSearchCriterion] = useState(DEFAULT_CRITERION);
  const [searchCriteria, setSearchCriteria] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoggedIn = false, searchTerm: propSearchTerm, searchCriterion: propSearchCriterion = '', history } = props;

  useEffect(() => {
    setSearchCriteria(SEARCH_CRITERIA_CONSTANTS.filter(
      ({ isAuthRequired }) => !isAuthRequired || isLoggedIn
    ));

    if (!isLoggedIn && !SEARCH_CRITERIA_CONSTANTS.find(({ value, isAuthRequired }) => (value === searchCriterion && !isAuthRequired))) {
      setSearchCriterion(DEFAULT_CRITERION);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (searchTerm !== propSearchTerm) {
      setSearchTerm(propSearchTerm);
    }
  }, [propSearchTerm]);

  useEffect(() => {
    if (searchCriterion !== propSearchCriterion) {
      setSearchCriterion(propSearchCriterion);
    }
  }, [propSearchCriterion]);

  const classes = useStyles();

  const handleChange = (event) => {
    setSearchCriterion(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const submitSearchQuery = () => {
    let searchString = `/search_term/${searchTerm}`;
    
    if (searchCriterion) {
      searchString = `${searchString}?search-criterion=${searchCriterion}`;
    }

    history.push(searchString);
  };

  return (
    <div className={classes.searchBarWrapper}>
      <FormControl className={classes.formControl}>
        <Select
          labelId='demo-customized-select-label'
          id='demo-customized-select'
          value={searchCriterion}
          onChange={handleChange}
        >
          {
            searchCriteria.map(
              ({ label, value }) => (<MenuItem key={value} value={value}>{label}</MenuItem>)
            )
          }
        </Select>
      </FormControl>
      <Input
        className={classes.input}
        placeholder='Search'
        id='input-with-icon-adornment'
        disableUnderline={true}
        endAdornment={
          <InputAdornment position='end' disablePointerEvents={!searchTerm} className={classes.inputAdornment}>
            <SearchIcon onClick={submitSearchQuery} />
          </InputAdornment>
        }
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress= {(evnt) => {
          if (evnt.key === 'Enter') {
            submitSearchQuery();
          }
        }}
      />
    </div>
  );
};

Search.propTypes = {
  isLoggedIn: PropTypes.bool,
  searchTerm: PropTypes.string,
  searchCriterion: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(Search);
