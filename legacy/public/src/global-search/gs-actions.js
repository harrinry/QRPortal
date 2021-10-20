import { FETCHSEARCHRESULTS, fetchStandardsByTag } from './gs-resources';
import { SET_QUALITY_RULES_SEARCH_RESULTS, 
  ERROR_WHILE_FETCHING_SEARCH_RESULTS, 
  CLEAR_SEARCH_RESULTS, 
  DISPLAY_QUALITY_RULES_SEARCH_RESULTS, 
  HIDE_QUALITY_RULES_SEARCH_RESULTS, SET_SELECTED_SEARCH_RESULT, SET_QUERY_ON_SEARCH_INITIALIZATION} from './gs-actions-type';

import { setFetchingState } from 'body-rules-list/brl-actions';
import { endLoadingState } from 'body-rules-list/brl-actions';
import { getPrefix } from './gs-lib';
import { searchPrefixMap } from './gs-constants';
import { historyPushState } from '../common';

const startFetching = ( query ) => {
  const _pre = getPrefix(query);
  return {
    type: SET_QUERY_ON_SEARCH_INITIALIZATION,
    payload: {
      query: _pre ? _pre.searchVal : query,
      type: _pre ? _pre.searchMethod : searchPrefixMap.default,
    }
  };
};

export const setSelectedSearchResult = ( itemRef ) => {
  return {
    type: SET_SELECTED_SEARCH_RESULT,
    payload: {
      itemRef
    }
  };
};

const setSearchResults = ( data ) => {
  return {
    type: SET_QUALITY_RULES_SEARCH_RESULTS,
    payload: {
      results: data
    }
  };
};

const errorHandler = ( err ) => {
  return {
    type: ERROR_WHILE_FETCHING_SEARCH_RESULTS,
    payload: {
      err,
    }
  };
};

export const fetchSearchResults = ( query ) => {
  return function (dispatch) {
    dispatch(setFetchingState());
    dispatch(startFetching(query));
    dispatch(displaySearchResults());
    return FETCHSEARCHRESULTS(query).then(
      data => dispatch(setSearchResults(data)),
      err => dispatch(errorHandler(err))
    ).then( () => dispatch(endLoadingState()) ).then(() => historyPushState());
  };
};

export const fetchQualityStandardsByTag = ( query ) => {
  return function (dispatch) {
    dispatch(setFetchingState());
    dispatch(startFetching(query));
    dispatch(displaySearchResults());
    return fetchStandardsByTag(query).then(
      data => dispatch(setSearchResults(data)),
      err => dispatch(errorHandler(err))
    ).then( () => dispatch(endLoadingState()) ).then(() => historyPushState());
  };
};

export const hideSearchResults = () => {
  return { type: HIDE_QUALITY_RULES_SEARCH_RESULTS };
};

export const displaySearchResults = () => {
  return { type: DISPLAY_QUALITY_RULES_SEARCH_RESULTS };
};

export const clearSearchResults = () => {
  return { type: CLEAR_SEARCH_RESULTS };
};