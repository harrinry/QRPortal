import { SEARCHAPI } from './gs-constants';

export const FETCHSEARCHRESULTS = ( query ) => {
  return fetch( SEARCHAPI + query ).then( res => res.json() );
};