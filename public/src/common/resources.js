import { API_REQUEST } from './constants';
import { isEcho } from './lib';
export const apiFetch = ( query ) => {
  return fetch( API_REQUEST + query ).then( res => res.json() );
};

export const webFetch = ( query ) => {
  return fetch( query + (isEcho() ? '?q=echo' : '') ).then( res => res.json());
};