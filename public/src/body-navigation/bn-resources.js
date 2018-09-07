import { apiFetch } from '../common';
import { FETCH_SELECTOR, FETCH_QUALITYSTANDARD_SELECTOR, ITEMS_URL_POSTFIX } from './bn-constants';

export const fetchNavData = ( query ) => {
  return (FETCH_SELECTOR.test( query ) ? 
    fetch( query ).then(res => res.json()) : 
    ( FETCH_QUALITYSTANDARD_SELECTOR.test( query ) ? 
      apiFetch( query + ITEMS_URL_POSTFIX ) : 
      apiFetch( query )));
};