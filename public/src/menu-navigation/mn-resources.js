import { apiFetch } from 'common/';
import { EXTENTION_QUERY_PREFIX } from './mn-constants';

export const QUERIES = {
  businessCriteria: 'AIP/business-criteria',
  cisq: 'AIP/quality-standards/CISQ/categories',
  owasp: 'AIP/quality-standards/OWASP/categories',
  technologies: 'rules/technologies.json',
  extensions: 'rules/extensions.json',
  standards: 'AIP/quality-standards'
};

export const FETCHTECHNOLOGIES = () => {
  return fetch( QUERIES.technologies ).then( res => res.json() );
};

export const FETCHEXTENSIONS = () => {
  return fetch( QUERIES.extensions )
    .then( res => res.json())
    .then( data => data.map( e => {
      return {
        ...e,
        href: EXTENTION_QUERY_PREFIX + e.href
      };
    } ) );
};

export const FETCHBUSINESSCRITERIA = () => {
  return apiFetch( QUERIES.businessCriteria );
};

export const FETCHCISQDATA = () => {
  return apiFetch( QUERIES.cisq );
};

export const FETCHOWASPDATA = () => {
  return apiFetch( QUERIES.owasp );
};