import { LOCALSTORAGEKEY } from './constants';
import store from 'setup/store';

export function createClassName( ...classes ){
  return classes.filter( cls => cls !== undefined && cls !== null).join(' ');
}

export function isEcho(){
  return window.location.pathname !== '/rules';
}

export function Struct( ...composedStructure ){
  const props = composedStructure;
  const len = props.length;

  function constructor(...args){
    for (let i = 0; i < len; i++) {
      this[props[i]] = args[i];
    }
    return this;
  }

  return constructor;
}

export function voidlessArray( ...elements ){
  return elements.filter( e =>{
    if( e !== undefined && e !== null ) return e;
  });
}

export function setLocalStorage( key, value ){
  const obj = {
    ...JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)),
    [key]: value
  };
  localStorage.setItem( LOCALSTORAGEKEY, JSON.stringify(obj) );
}

export function readLocalStorage( key ){
  const obj = localStorage.getItem(LOCALSTORAGEKEY);
  const jsobj = obj ? JSON.parse(obj) : undefined; 
  return jsobj ? jsobj[key] : undefined;
}

function buildHistoryObject(){

  const state = store.getState(),
    view = state.contentBody.view,
    path = state.path.path,
    stdRef = state.standards.data.find( e => e.selected === true ),
    ruleRef = state.rulesList.data.find( e => e.selected === true ),
    versionRef = state.compare.params.vi ? state.compare.params.vi.name : '',
    isStd = path[0] ? path[0].name === 'Standards' || path[0].name === 'Health Factors' || path[0].name === 'Indexes' : false,
    isExt = path[0] ? path[0].name === 'Packages' : false,
    ref = [
      stdRef && isStd ? stdRef.id : '',
      ruleRef ? ruleRef.id : '',
      versionRef && isExt ? versionRef : ''
    ],
    isSearch = state.search.resultsVisible,
    search = state.search,
    searchSelected = search.results.find( e => e.selected === true );

  const map = {
    standards: 'std',
    indexes: 'idx',
    technologies: 't',
    packages: 'srs'
  };

  const query = path.map( (p, i, arr) => {
    switch (i) {
    case 0:
      return p.name.toLowerCase() === 'health factors' 
        ? map.standards + '_cast' 
        : map[p.name.toLowerCase()];
    case 1:
      return arr[0].name === 'Technologies' ? p.id : idFromPath(p);
    case 2: 
      return arr[0].name === 'Packages' ? undefined : p.name.toLowerCase();
    }
  }).filter(e => e !== undefined);
  return !isSearch ? {
    view: view, 
    title: query+ref.join(), 
    url: '?sec='.concat(query.join('_'), '&ref=' + ref.join('|') )
  } : {
    view: view,
    title: search.query,
    url: '?s=' + [search.query, search.type, searchSelected ? searchSelected.id : ''].join('|')
  };
}

function idFromPath( pathItem ){
  if(!pathItem) return '';
  const isExt = /(com\.castsoftware\.)/ig.test(pathItem.id),
    id = isExt ? pathItem.id : pathItem.name;

  return isExt ? id.substring(17) : id.toLowerCase();
}

export function historyPushState(){
  const state = buildHistoryObject();
  return window.history.pushState(state.view, state.title, state.url);
}

export function historyReplaceState(){
  const state = buildHistoryObject();
  return window.history.replaceState(state.view, state.title, state.url);
}

export function nullifyHistory(){
  return window.history.replaceState({}, undefined, window.location.pathname);
}