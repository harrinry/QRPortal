import { webFetch } from 'common/';
import { AIP_VERSIONS_EXT } from './mn-constants';

export const QUERIES = {
  businessCriteria: 'AIP/business-criteria',
  cisq: 'AIP/quality-standards/CISQ/categories',
  owasp: 'AIP/quality-standards/OWASP/categories',
  cwe: 'AIP/quality-standards/CWE/categories',
  technologies: 'aip/technologies',
  extensions: 'aip/extensions',
  standards: 'AIP/quality-standards',
};

export const fetchQualityStandards = ( echo ) => {
  return webFetch( QUERIES.standards + echo ? '?q=echo': '' );
};

export const FETCHTECHNOLOGIES = ( echo ) => {
  return webFetch( QUERIES.technologies + echo ? '?q=echo': '' );
};

export const FETCHEXTENSIONS = ( echo ) => {
  return webFetch( QUERIES.extensions + echo ? '?q=echo': '' );
};

export const fetchExtensionVersions = ( url ) => {
  return webFetch(url);
};

export const fetchCastAIPVersions = () => {
  return webFetch(AIP_VERSIONS_EXT.href);
};

export const FETCHBUSINESSCRITERIA = ( echo ) => {
  return webFetch( QUERIES.businessCriteria + echo ? '?q=echo': '' );
};

export const FETCHCISQDATA = ( echo ) => {
  return webFetch( QUERIES.cisq + echo ? '?q=echo': '' );
};

export const FETCHCWEDATA = ( echo ) => {
  return webFetch( QUERIES.cwe + echo ? '?q=echo': '' );
};

export const FETCHOWASPDATA = ( echo ) => {
  return webFetch( QUERIES.owasp + echo ? '?q=echo': '' );
};