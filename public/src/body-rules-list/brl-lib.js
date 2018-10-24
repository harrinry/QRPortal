import React from 'react';
import { compareValueKeys, CLASSES } from './brl-constants';
import { COMMON_CLASSES, createClassName } from 'common/';

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
  case compareValueKeys.critical:{
    return obj[key] === ToBool(textValue);
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
  return (
    <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined)}>
      <td className={CLASSES.idCell}>{values.id}</td>
      <td className={CLASSES.nameCell}>{values.name}</td>
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
  return (
    <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined)}>
      <td className={CLASSES.idCell}>{values.id}</td>
      <td className={CLASSES.nameCell}>{values.name}</td>
      <td className={CLASSES.TechnosCell}>{technos.join(', ')}</td>
      <td className={createClassName(CLASSES.critical, values.critical ? COMMON_CLASSES.critical : undefined)}> </td>
    </tr>
  );
};