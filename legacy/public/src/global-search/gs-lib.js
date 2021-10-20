import { PrefixSelector, searchPrefixMap } from './gs-constants';

export const getPrefix = ( searchStr ) => {
  const prefix = PrefixSelector.find( pre => {
    console.log(searchStr, pre);
    return searchStr.indexOf(pre) === 0; 
  });
  console.log(prefix);
  
  return prefix ? {
    searchVal: searchStr.substring(prefix.length),
    prefix: prefix,
    searchMethod: searchPrefixMap[prefix]
  } : undefined;
};