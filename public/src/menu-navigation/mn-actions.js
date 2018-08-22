import {FETCHEXTENTIONS, FETCHTECHNOLOGIES, FETCHBUSINESSCRITERIA, FETCHCISQDATA, FETCHOWASPDATA, QUERIES } from './mn-resources';
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

const setExtentions = ( data ) => {
  return {
    type: ACTIONTYPES.SETEXTENTIONS,
    payload: {
      data: data
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

const fetchApiData = ( fetchFunc, onSuccessAction, onFailAction ) => {
  return function (dispatch) {
    return fetchFunc().then(
      data => dispatch(onSuccessAction(data)),
      err => dispatch(onFailAction(err))
    );
  };
};

export const fetchExtentions = () => {
  return fetchApiData( FETCHEXTENTIONS, 
    setExtentions, 
    (err) => errorOnFetch(err, QUERIES.extentions) );
};

export const fetchTechnologies = () => {
  return fetchApiData( FETCHTECHNOLOGIES, 
    setTechnologies, 
    (err) => errorOnFetch(err, QUERIES.technologies) );
};

export const fetchBusinessCriteria = () => {
  return fetchApiData( FETCHBUSINESSCRITERIA, 
    setBusinessCriteria, 
    (err) => errorOnFetch(err, QUERIES.businessCriteria) );
};

export const fetchCisq = () => {
  return fetchApiData( FETCHCISQDATA, 
    setCisq, 
    (err) => errorOnFetch(err, QUERIES.cisq) );
};

export const fetchOwasp = () => {
  return fetchApiData( FETCHOWASPDATA, 
    setOwasp, 
    (err) => errorOnFetch(err, QUERIES.owasp) );
};

export const setSelectedItem = ( itemRef ) => {
  return {
    type: ACTIONTYPES.SETSELECTEDITEM,
    payload: {
      data:itemRef
    }
  };
};