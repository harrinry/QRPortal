import { PrefixSelector, searchPrefixMap } from './gs-constants';

export const getPrefix = ( searchStr ) => {
  const prefix = PrefixSelector.find( pre => searchStr.indexOf(pre) === 0 );
  return prefix ? {
    searchVal: searchStr.substring(prefix.length),
    prefix: prefix,
    searchMethod: searchPrefixMap[prefix]
  } : undefined;
};