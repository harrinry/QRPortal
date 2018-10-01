import { SEARCHAPI, SEARCHSTDTAGAPI } from './gs-constants';

export const FETCHSEARCHRESULTS = ( query ) => {
  return fetch( SEARCHAPI + query ).then( res => res.json() );
};

export const fetchStandardsByTag = ( query ) => {
  return fetch( SEARCHSTDTAGAPI + query ).then( res => res.json() );
};