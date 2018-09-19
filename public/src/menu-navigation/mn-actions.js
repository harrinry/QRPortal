import {FETCHEXTENSIONS, FETCHTECHNOLOGIES, FETCHBUSINESSCRITERIA, FETCHCISQDATA, FETCHOWASPDATA, QUERIES, fetchCastAIPVersions, fetchExtensionVersions } from './mn-resources';
import * as ACTIONTYPES from './mn-actions-type';

const errorOnFetch = ( err, query ) => {
  return {
    type: ACTIONTYPES.FAILEDTOFETCHSERVERDATA,
    payload: {
      query: query,
      error: err
    }
  };
};

const setTechnologies = ( data ) => {
  return {
    type: ACTIONTYPES.SETTECHNOLOGIES,
    payload: {
      data: data
    }
  };
};

const setExtensions = ( data ) => {
  return {
    type: ACTIONTYPES.SETEXTENSIONS,
    payload: {
      data: data
    }
  };
};

const setExtensionVersion = ( index, versions ) => {
  return {
    type: ACTIONTYPES.SET_EXTENSION_VERSION,
    payload: {
      index,
      versions
    }
  };
};

const setBusinessCriteria = ( data ) => {
  return {
    type: ACTIONTYPES.SETBUSINESSCRITERIA,
    payload: {
      data: data
    }
  };
};

const setCisq = ( data ) => {
  return {
    type: ACTIONTYPES.SETCISQ,
    payload: {
      data: data
    }
  };
};

const setOwasp = ( data ) => {
  return {
    type: ACTIONTYPES.SETOWASP,
    payload: {
      data: data
    }
  };
};

const fetchingData = ( actionType ) => {
  return {
    type: actionType
  };
};

const fetchingVersionData = ( index ) => {
  return {
    type: ACTIONTYPES.FETCH_EXTENSION_VERSION,
    payload: {
      index
    }
  };
};

const fetchApiData = ( fetchFunc, onSuccessAction, onFailAction, fetchActionType ) => {
  return function (dispatch) {
    dispatch(fetchingData(fetchActionType));
    return fetchFunc().then(
      data => dispatch(onSuccessAction(data)),
      err => dispatch(onFailAction(err))
    );
  };
};

export const fetchExtensions = () => {
  return fetchApiData( FETCHEXTENSIONS, 
    setExtensions, 
    (err) => errorOnFetch(err, QUERIES.extensions), ACTIONTYPES.FETCHEXTENSIONS );
};

export const fetchExtensionVersion = ( extension ) => {
  return (dispatch) => {
    dispatch(fetchingVersionData(extension.index));
    return fetchExtensionVersions( extension.href ).then(
      data => dispatch(setExtensionVersion(extension.index, data)),
      err => dispatch( errorOnFetch(err, extension.href))
    );
  };
};

export const fetchAIPVersions = () => {
  const index = 0;
  return (dispatch) => {
    dispatch(fetchingVersionData(index));
    return fetchCastAIPVersions().then(
      data => dispatch(setExtensionVersion(index, data)),
      err => dispatch( errorOnFetch(err, index))
    );
  };
};

export const fetchTechnologies = () => {
  return fetchApiData( FETCHTECHNOLOGIES, 
    setTechnologies, 
    (err) => errorOnFetch(err, QUERIES.technologies), ACTIONTYPES.FETCHTECHNOLOGIES );
};

export const fetchBusinessCriteria = () => {
  return fetchApiData( FETCHBUSINESSCRITERIA, 
    setBusinessCriteria, 
    (err) => errorOnFetch(err, QUERIES.businessCriteria), ACTIONTYPES.FETCHBUSINESSCRITERIA );
};

export const fetchCisq = () => {
  return fetchApiData( FETCHCISQDATA, 
    setCisq, 
    (err) => errorOnFetch(err, QUERIES.cisq), ACTIONTYPES.FETCHCISQ );
};

export const fetchOwasp = () => {
  return fetchApiData( FETCHOWASPDATA, 
    setOwasp, 
    (err) => errorOnFetch(err, QUERIES.owasp), ACTIONTYPES.FETCHOWASP );
};

export const setSelectedItem = ( itemRef ) => {
  return {
    type: ACTIONTYPES.SETSELECTEDITEM,
    payload: {
      data:itemRef
    }
  };
};