import * as ACTIONTYPE from './cmp-actions-type';
import { fetchCompareExtensionVersions } from './cmp-resources';
import { cmpQueryBuilder } from './cmp-lib';

export const isFetching = ( query ) => {
  return {
    type: ACTIONTYPE.CMP_FETCH_COMPARISON_DATA,
    payload: {
      query
    }
  };
};

export const showComparisonTable = () => {
  return {
    type: ACTIONTYPE.CMP_DISPLAY_COMPARISON_DATA
  };
};

export const hideComparisonTable = () => {
  return {
    type: ACTIONTYPE.CMP_HIDE_COMPARISON_DATA
  };
};

export const enableComparing = () => {
  return {
    type: ACTIONTYPE.CMP_ENABLE_COMPARING
  };
};

export const disableComparing = () => {
  return {
    type: ACTIONTYPE.CMP_DISABLE_COMPARING
  };
};

const setComparisonData = ( data ) => {
  return {
    type: ACTIONTYPE.CMP_SET_COMPARISON_DATA,
    payload: {
      data
    }
  };
};

const onCompareError = ( err ) => {
  return {
    type: ACTIONTYPE.CMP_ERROR_ON_COMPARE,
    payload: {
      err
    }
  };
};

export const fetchExtensionComparisonData = ( extensionName, version1, version2 ) =>{
  return (dispatch) => {
    const query = cmpQueryBuilder(extensionName, version1, version2);
    dispatch(isFetching(query));
    return fetchCompareExtensionVersions( query ).then(
      data => dispatch(setComparisonData(data)),
      err => dispatch(onCompareError(err))
    );
  };
};