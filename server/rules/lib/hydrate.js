const struct = require('../../lib/dataConstruct/struct');
const generatePath = require('./pathGenerator');
const generateRules = require('./rqGenerator');
const search = require('../../search/qr_searchParser');
const standardize = require('./standardizeParams');
const {getRulesDetailsFromFile} = require('../../lib/ruleDetailsStruct');
const Hbj = new struct( 'path', 'data', 'search' );
const root = require('app-root-path');

function createHydrate( queryParams ){
  const params = standardize( queryParams );
  const { sec, ref, s } = params;
  let PATH, RULES, SEARCH;

  if (sec && ref) {
    PATH = generatePath(sec),
    RULES = generateRules(ref, PATH);
  } else if( s && isSearchFormatValid(s) ){
    PATH = [];
    RULES = {};
    const slt = s.split('|'),
      searchData = search(slt[0], slt[1]).map( v => {
        if (slt[2] !== '') {
          return parseInt(slt[2]) === v.id ? {
            ...v,
            selected: true
          } : v;
        } else return v;
      });
    SEARCH = {
      query: slt[0],
      data: searchData,
      type: slt[1],
      det: slt[2] !== ''
        ? getDetails(slt[2], searchData)
        : undefined
    };
  }

  return new Hbj( skimPath(PATH), RULES, SEARCH );
}

function skimPath( path ){
  if (path[1].name.toLowerCase() === 'health factors') return path.filter( (e, i) => i > 0);
  else return path;
}

function getDetails( id, arr ){
  if(!Array.isArray(arr)) return [];
  const _id = parseInt(id);
  const _path = arr.find( e => e.id === _id);
  return _path ? getRulesDetailsFromFile(root.resolve('rest/' + _path.href)) : undefined;
}

function isSearchFormatValid( searchParam ){
  if(!searchParam) return false;
  
  const split = searchParam.split('|');
  if (split.length === 3) {
    return /(.+\|\w+\|\d?)/ig.test(searchParam) ? true : false;
  }
  return false;
}

module.exports = createHydrate;