import { webFetch } from 'common/';
import { AIP_VERSIONS_EXT } from './mn-constants';

export const QUERIES = {
  businessCriteria: 'AIP/business-criteria',
  cisq: 'AIP/quality-standards/CISQ/categories',
  owasp: 'AIP/quality-standards/OWASP/categories',
  technologies: 'aip/technologies',
  extensions: 'aip/extensions',
  standards: 'AIP/quality-standards',
};

export const FETCHTECHNOLOGIES = () => {
  return webFetch( QUERIES.technologies );
};

export const FETCHEXTENSIONS = () => {
  return webFetch( QUERIES.extensions );
};

export const fetchExtensionVersions = ( url ) => {
  return webFetch(url);
};

export const fetchCastAIPVersions = () => {
  return webFetch(AIP_VERSIONS_EXT.href);
};

export const FETCHBUSINESSCRITERIA = () => {
  return webFetch( QUERIES.businessCriteria );
};

export const FETCHCISQDATA = () => {
  return webFetch( QUERIES.cisq );
};

export const FETCHOWASPDATA = () => {
  return webFetch( QUERIES.owasp );
};