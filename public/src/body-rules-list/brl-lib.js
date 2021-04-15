import React from 'react';
import { compareValueKeys, CLASSES } from './brl-constants';
import { COMMON_CLASSES, createClassName } from 'common/';
import { isEcho } from '../common';

export function isDepricated(str = ''){
  return stringStartsWith(str, 'DEPRECATED');
}

function stringStartsWith(str = '', value = '', ignoreCase = false){
  const vlen = value.length;

  for (let index = 0; index < vlen; index++) {
    let vChar = value.charAt(index);
    let sChar = str.charAt(index);

    if(ignoreCase){
      vChar = vChar.toLowerCase();
      sChar = sChar.toLowerCase();
    }

    if(vChar !== sChar) return false;
  }

  return true;
}

export const compareFunction = ( textValue, obj ) =>{

  const hasPrefix = containesPrefix(textValue);

  if( hasPrefix ){
    const split = textValue.split(':');
    const prefix = split[0],
      searchVal = split[1];

    return searchBySpecificKey(searchVal, prefix, obj);
  }

  return searchByDefaultKeys(textValue, obj);
};

const searchBySpecificKey = (textValue, key, obj) => {
  let reg;

  try {
    reg = new RegExp( textValue, 'i');
  } catch (error){
    return [];
  }

  switch (key) {
  case compareValueKeys.critical:
    return obj[key] === ToBool(textValue);
  case compareValueKeys.technologies:{
    obj.techSearch = obj.technologies.map( e => e.name).join(';');
    return testRegex(reg, obj, compareValueKeys.techSearch);
  }
  default:
    return testRegex(reg, obj, key);
  }
};

const ToBool = ( text ) => {
  switch (text) {
  case 'true':
    return true;
  default:
    return false;
  }
};

const testRegex = ( regex, obj, key ) => {
  if (obj.hasOwnProperty(key)) {
    return regex.test( obj[key] ) ? true : false;
  }

  return false;
};

const searchByDefaultKeys = (textValue, obj) => {
  let reg;
  try {
    reg = new RegExp( textValue, 'i' );
  } catch (error) {
    return [];
  }

  return (reg.test(obj[compareValueKeys.id]) || reg.test(obj[compareValueKeys.name]) || (textValue.toLowerCase() === compareValueKeys.critical ? obj.critical : false) ) ? true : false;
};

const containesPrefix = ( text ) => {
  const hasColon = /:/gi;
  return hasColon.test(text);
};

export const childConstructor = ( values, index, callback ) => {

  if(isEcho())
  {
    return (
      <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined, isDepricated(values.name) ? CLASSES.emptyContent : undefined)}>
        <td className={CLASSES.idCell}>{values.id}</td>
        <td className={CLASSES.nameCell}>{values.name}</td>
      </tr>
    );
  }

  return (
    <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined, isDepricated(values.name) ? CLASSES.emptyContent : undefined)}>
      <td className={CLASSES.idCell}>{values.id}</td>
      <td className={CLASSES.nameCell}>{values.name}</td>
      <td className={createClassName(CLASSES.critical, values.critical ? COMMON_CLASSES.critical : undefined)}> </td>
    </tr>
  );
};

export const standardsChildConstructor = ( values, index, callback ) => {
  const technos = values.hasOwnProperty(compareValueKeys.techName) ? values[compareValueKeys.techName] : [''];

  if(isEcho())
  {
    return (
      <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined, isDepricated(values.name) ? CLASSES.emptyContent : undefined)}>
        <td className={CLASSES.idCell}>{values.id}</td>
        <td className={CLASSES.nameCell}>{values.name}</td>
        <td className={CLASSES.TechnosCell}>{technos.join(', ')}</td>
      </tr>
    );
  }

  return (
    <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined, isDepricated(values.name) ? CLASSES.emptyContent : undefined)}>
      <td className={CLASSES.idCell}>{values.id}</td>
      <td className={CLASSES.nameCell}>{values.name}</td>
      <td className={CLASSES.TechnosCell}>{technos.join(', ')}</td>
      <td className={createClassName(CLASSES.critical, values.critical ? COMMON_CLASSES.critical : undefined)}> </td>
    </tr>
  );
};

export const SearchChildConstructor = ( values, index, callback ) => {
  const technos = values.hasOwnProperty(compareValueKeys.technologies) ? values.technologies.map(t=>{
    if(t){
      return t.name;
    }
    return '';
  }) : [''];

  if(isEcho())
  {
    return (
      <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined, isDepricated(values.name) ? CLASSES.emptyContent : undefined)}>
        <td className={CLASSES.idCell}>{values.id}</td>
        <td className={CLASSES.nameCell}>{values.name}</td>
        <td className={CLASSES.TechnosCell}>{technos.join(', ')}</td>
      </tr>
    );
  }

  return (
    <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined, isDepricated(values.name) ? CLASSES.emptyContent : undefined)}>
      <td className={CLASSES.idCell}>{values.id}</td>
      <td className={CLASSES.nameCell}>{values.name}</td>
      <td className={CLASSES.TechnosCell}>{technos.join(', ')}</td>
      <td className={createClassName(CLASSES.critical, values.critical ? COMMON_CLASSES.critical : undefined)}> </td>
    </tr>
  );
};
