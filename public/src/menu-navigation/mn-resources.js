import { API_REQUEST } from './mn-constants';

export const QUERIES = {
  businessCriteria: 'AIP/business-criteria',
  cisq: 'AIP/quality-standards/CISQ/categories',
  owasp: 'AIP/quality-standards/OWASP/categories',
  technologies: 'rules/technologies.json',
  extensions: 'rules/extensions.json'
};

const FETCHAPIDATA = ( query ) => {
  return fetch( API_REQUEST + query ).then( res => res.json() );
};

export const FETCHTECHNOLOGIES = () => {
  return fetch( QUERIES.technologies ).then( res => res.json() );
};

export const FETCHEXTENSIONS = () => {
  return fetch( QUERIES.extensions ).then( res => res.json() );
};

export const FETCHBUSINESSCRITERIA = () => {
  return FETCHAPIDATA( QUERIES.businessCriteria );
};

export const FETCHCISQDATA = () => {
  return FETCHAPIDATA( QUERIES.cisq );
};

export const FETCHOWASPDATA = () => {
  return FETCHAPIDATA( QUERIES.owasp );
};