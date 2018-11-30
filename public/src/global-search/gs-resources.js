import { SEARCHAPI, SEARCHSTDTAGAPI, PrefixSelector, SEARCHBYAPI } from './gs-constants';
import { getPrefix } from './gs-lib';

export const FETCHSEARCHRESULTS = ( query ) => {
  const prefix = getPrefix(query),
    key = prefix ? prefix.prefix : null;
  switch (key) {
  case PrefixSelector[0]:
    return fetch( SEARCHBYAPI + prefix.searchVal ).then( res => res.json() );
  case PrefixSelector[1]:
    return fetch( SEARCHSTDTAGAPI + prefix.searchVal ).then( res => res.json() );
  default:
    return fetch( SEARCHAPI + query ).then( res => res.json() );
  }
};

export const fetchStandardsByTag = ( query ) => {
  return fetch( SEARCHSTDTAGAPI + query ).then( res => res.json() );
};