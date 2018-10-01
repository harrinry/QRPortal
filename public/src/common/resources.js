import { API_REQUEST } from './constants';

export const apiFetch = ( query ) => {
  return fetch( API_REQUEST + query ).then( res => res.json() );
};

export const webFetch = ( query ) => {
  return fetch( query ).then( res => res.json());
};