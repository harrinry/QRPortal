import * as ACTIONTYPES from './bsl-actions-type';
import { webFetch, apiFetch } from '../common/';


const setStandardsListData = ( query, data ) =>{
  return {
    type: ACTIONTYPES.SET_STANDRADS_LIST_DATA,
    payload:{
      query,
      data
    }
  };
};

const setFetchingState = ( query ) => {
  return {
    type: ACTIONTYPES.FETCH_STANDRADS_LIST_DATA,
    payload: {
      query
    }
  };
};

const failedToFetchStandards = ( query, err ) => {
  return {
    type: ACTIONTYPES.FAILED_TO_FETCH_STANDRADS_LIST_DATA,
    payload: {
      err,
      query
    }
  };
};

export const setSelected = ( itemRef ) => {
  return {
    type: ACTIONTYPES.SET_SELECTED_STANDARDS_ITEM,
    payload: {
      itemRef
    }
  };
};

export const fetchStandardsListData = ( query ) => {
  return ( dispatch ) => {
    dispatch(setFetchingState(query));
    return webFetch( query ).then(
      data => dispatch(setStandardsListData(query, data)),
      err => dispatch(failedToFetchStandards(query, err))
    );
  };
};

const fetchStandardsInfo = ( query ) => {
  return {
    type: ACTIONTYPES.FETCH_STANDRADS_LIST_DATA,
    payload: {
      query
    }
  };
};

const setStandardsInfoData = ( data ) => {
  return {
    type: ACTIONTYPES.SET_STANDARDS_INFO_DATA,
    payload: {
      ...data
    }
  };
};

const errorOnInfoFetch = ( err ) => {
  return {
    type: ACTIONTYPES.FAILED_TO_FETCH_STANDARDS_INFO_DATA,
    payload: {
      err
    }
  };
};

export const fetchStandardsInfoData = ( query ) => {
  return ( dispatch ) => {
    dispatch(fetchStandardsInfo(query));
    return apiFetch( query ).then(
      data => dispatch(setStandardsInfoData(data)),
      err => dispatch(errorOnInfoFetch(err))
    );
  };
};