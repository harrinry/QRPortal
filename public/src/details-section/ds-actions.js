import * as ACTIONTYPES from './ds-actions-type';
import { webFetch } from 'common/';
import { fetchListData } from 'body-rules-list/brl-actions';
import { historyReplaceState } from '../common';

const fetchingDetailsData = () => {
  return {
    type: ACTIONTYPES.FETCHING_DETAILS_CONTENT_FROM_API
  };
};

const setDetailsData = ( data, query ) => {
  return {
    type: ACTIONTYPES.SET_CONTENT_DETAILS,
    payload: {
      data,
      query
    }
  };
};

const errorOnDetailsFetch = (err, query) => {
  return {
    type: ACTIONTYPES.ERROR_ON_DETAILS_FETCH,
    payload: {
      err,
      query
    }
  };
};

export const fetchListDataFromTag = ( standard, id ) => {
  return fetchListData('rest/AIP/quality-standards/' + standard + '/items/' + id + '/quality-rules', webFetch);
};

export const fetchDetailsData = ( url ) => {
  return (dispatch) => {
    dispatch(fetchingDetailsData());
    return webFetch( url ).then(
      data => dispatch(setDetailsData(data, url)),
      err => dispatch(errorOnDetailsFetch(err, url))
    ).then(()=> historyReplaceState());
  };
};

export const clearDetailsData = () => {
  return {
    type: ACTIONTYPES.CLEAR_CONTENT_DETAILS
  };
};