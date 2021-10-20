import * as ACTIONTYPES from './bn-actions-type';
import { webFetch } from 'common/';

const setFetchingState = ( title, icon, query ) => {
  return {
    type: ACTIONTYPES.FETCH_NAVIGATION_DATA,
    payload:{
      title,
      query,
      icon
    }
  };
};

const setNavigationData = ( data ) => {
  return {
    type: ACTIONTYPES.SET_NAVIGATION_DATA,
    payload: {
      data
    }
  };
};

const errorFetchingNavData = ( err ) => {
  return {
    type: ACTIONTYPES.FAILED_TO_FETCH_NAVIGATION_DATA,
    payload: {
      err
    }
  };
};

export const clearNavigationData = () => {
  return {
    type: ACTIONTYPES.CLEAR_NAVIGATION_DATA
  };
};

export const fetchNavigationData = ( title, query, iconURL ) => {
  return (dispatch) => {
    dispatch(setFetchingState(title, iconURL, query));
    return webFetch( query ).then(
      data => dispatch(setNavigationData(data)),
      err => dispatch(errorFetchingNavData(err))
    );
  };
};