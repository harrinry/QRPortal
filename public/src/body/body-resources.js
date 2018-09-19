import { apiFetch } from 'common/';

export const STATIC_QUERIES = {
  technologies: 'rules/technologies.json',
  sources: 'rules/extensions.json'
};

const ext_rules = '/quality-rules';
const ext_items = '/items';

export const fetchExtensionsList = () => {
  return fetch(STATIC_QUERIES.sources).then(res => res.json());
};

export const fetchTechnologiesList = () => {
  return fetch(STATIC_QUERIES.technologies).then(res => res.json());
};

export const fetchQualityStandardList = ( url ) => {
  return apiFetch( url + ext_items );
};

export const fetchBusinessCriteriaList = ( url ) => {
  return apiFetch( url + ext_rules );
};