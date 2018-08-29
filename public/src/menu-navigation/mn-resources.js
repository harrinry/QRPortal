import { apiFetch } from 'common/';
import { AIP_VERSIONS_EXT, qualityRules_post } from './mn-constants';

export const QUERIES = {
  businessCriteria: 'AIP/business-criteria',
  cisq: 'AIP/quality-standards/CISQ/categories',
  owasp: 'AIP/quality-standards/OWASP/categories',
  technologies: 'rules/technologies.json',
  extensions: 'rules/extensions.json',
  standards: 'AIP/quality-standards',
  ext_version_prefix: 'rules/extensions?q=',
};

export const FETCHTECHNOLOGIES = () => {
  return fetch( QUERIES.technologies ).then( res => res.json() );
};

export const FETCHEXTENSIONS = () => {
  return fetch( QUERIES.extensions )
    .then( res => res.json());
};

export const fetchExtensionVersions = ( url ) => {
  return fetch(QUERIES.ext_version_prefix + url)
    .then(res => res.json())
    .then(data => data.map( o => {
      return {
        ...o,
        href: o.href + qualityRules_post
      };
    }));
};

export const fetchCastAIPVersions = () => {
  return apiFetch(AIP_VERSIONS_EXT.href)
    .then(data => data.map( o => {
      return {
        ...o,
        href: o.href + qualityRules_post
      };
    }));
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