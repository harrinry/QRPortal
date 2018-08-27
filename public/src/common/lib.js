import { LOCALSTORAGEKEY } from './constants';

export function createClassName( ...classes ){
  return classes.filter( cls => cls !== undefined && cls !== null).join(' ');
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