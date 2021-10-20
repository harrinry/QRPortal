import {FETCHEXTENSIONS, FETCHTECHNOLOGIES, FETCHBUSINESSCRITERIA, FETCHCISQDATA, FETCHOWASPDATA, QUERIES, fetchCastAIPVersions, fetchExtensionVersions, fetchQualityStandards, FETCHCWEDATA } from './mn-resources';
import { webFetch } from 'common/';
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

const PopulateQualityStandardsItems = ( data, query ) => {
  return {
    type: ACTIONTYPES.FETCHPOPULATATIONQUALITYSTANDARDITEMS,
    payload: {
      data,
      query
    }
  };
};

const fetchPopulationQualityStandardsItems = ( query ) => {
  return {
    type: ACTIONTYPES.FETCHPOPULATATIONQUALITYSTANDARDITEMS,
    payload: {
      query
    }
  };
};

const setQualityStandardsItem = ( data) => {
  return {
    type: ACTIONTYPES.SET_QUALITY_STANDARDS_FOR_MENU,
    payload: {
      data
    }
  };
};

const fetchQualityStandardsItem = ( query ) => {
  return {
    type: ACTIONTYPES.FETCH_QUALITY_STANDARDS_FOR_MENU,
    payload: {
      query
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

const setCWE = ( data ) => {
  return {
    type: ACTIONTYPES.SETCWE,
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

export const fetchQualityStandardsData = () => {
  return function (dispatch) {
    dispatch(fetchQualityStandardsItem(QUERIES.standards));
    return fetchQualityStandards().then(
      data => dispatch(setQualityStandardsItem(data)),
      err => dispatch(errorOnFetch(err, QUERIES.standards))
    );
  };
};

export const populateQualityStandardsCategories = ( query ) =>{
  return function (dispatch) {
    dispatch(fetchPopulationQualityStandardsItems( query ));
    return webFetch().then(
      data => dispatch(PopulateQualityStandardsItems(data, query)),
      err => dispatch(errorOnFetch(err, query))
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

export const fetchCWE = () => {
  return fetchApiData(FETCHCWEDATA, 
    setCWE, 
    (err) => errorOnFetch(err, QUERIES.cwe), ACTIONTYPES.FETCHCWE );
};

export const setSelectedItem = ( itemRef ) => {
  return {
    type: ACTIONTYPES.SETSELECTEDITEM,
    payload: {
      data:itemRef
    }
  };
};