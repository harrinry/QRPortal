import React from 'react';
import PropTypes from 'prop-types';
import VerticalArray from 'components/array/';
import { compareFunction } from './brl-lib';
import { HEADERS, NORULES, ONERULE, FILTERRULESPLACEHOLDER, RULES, NOBPS, ONEBP, FILTERBPSPLACEHOLDER, BPS } from './brl-constants';
import { isEcho } from '../common/';

const RulesListArray = ( props ) => {
  const hasSearchResults = props.searchResults ? true : false,
    searchResultsLength = hasSearchResults ? props.searchResults.length : 0,
    searchResults = searchResultsLength > 0 ? props.searchResults : [];

  const BPHeaders = props.searchVisible || props.listCount === 2 ? [HEADERS.id, HEADERS.name] : [HEADERS.id, HEADERS.name];
  const FullHeaders = props.searchVisible || props.listCount === 2 ? [HEADERS.id, HEADERS.name, HEADERS.critical] : [HEADERS.id, HEADERS.name, HEADERS.critical];

  let childConstructor;
  if (props.searchVisible) {
    childConstructor = props.SearchArrayChildConstructor;
  } else if( props.listCount === 2 ) {
    childConstructor = props.arrayChildConstructorFromStandards;
  } else {
    childConstructor = props.arrayChildConstructor;
  }


  return(
    <VerticalArray isLoading={props.loading}
      childConstructor={childConstructor}
      filterPlaceholder={isEcho() ? FILTERBPSPLACEHOLDER : FILTERRULESPLACEHOLDER}
      itemCountTitle={isEcho() ? BPS : RULES}
      onEmpty={props.customMessage || (isEcho() ? NOBPS : NORULES)}
      headers={isEcho() ? BPHeaders : FullHeaders}
      compare={compareFunction}>
      { props.searchVisible ? searchResults : props.data}
    </VerticalArray>);
};

RulesListArray.propTypes = {
  searchVisible: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  arrayChildConstructor: PropTypes.func.isRequired,
  SearchArrayChildConstructor: PropTypes.func.isRequired,
  arrayChildConstructorFromStandards: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  customMessage: PropTypes.string
};

export default RulesListArray;
