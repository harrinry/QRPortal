import React from 'react';
import PropTypes from 'prop-types';
import VerticalArray from 'components/array/';
import { compareFunction } from './brl-lib';
import { HEADERS, NORULES, FILTERPLACEHOLDER, RULES } from './brl-constants';

const RulesListArray = ( props ) => {
  return(
    <VerticalArray childConstructor={props.arrayChildConstructor} filterPlaceholder={FILTERPLACEHOLDER} itemCountTitle={RULES} onEmpty={NORULES} headers={[HEADERS.id, HEADERS.name, HEADERS.critical]} compare={compareFunction}>
      { props.searchVisible ? (props.searchResults.length === 0 ? [] : props.searchResults) : props.data}
    </VerticalArray>);
};

RulesListArray.propTypes = {
  searchVisible: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  arrayChildConstructor: PropTypes.func.isRequired
};

export default RulesListArray;