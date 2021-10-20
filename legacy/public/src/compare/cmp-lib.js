import React from 'react';
import { comparePrefix, SECTIONS, compareValueKeys, CLASSES } from './cmp-constants';
import { createClassName, COMMON_CLASSES } from 'common';

export const cmpQueryBuilder = ( extID, ver1, ver2 ) => `${comparePrefix}${SECTIONS.extensions}/${extID}/${ver1}/${ver2}`;

export const arrayChildConstructor = ( values, index, callback ) => {
  return (
    <tr key={index} 
      onClick={callback} 
      className={createClassName( COMMON_CLASSES.arrayChildElement, 
        values.selected ? COMMON_CLASSES.arraySelected : undefined,
        values.label.toLowerCase() !== 'both' ? CLASSES.isNew : undefined)}>
      <td className={CLASSES.idCell}>{values.id}</td>
      <td className={CLASSES.nameCell}>{values.name}</td>
      <td className={CLASSES.versionCell}>{values.label}</td>
      <td className={createClassName(CLASSES.critical, values.critical ? COMMON_CLASSES.critical : undefined)}> </td>
    </tr>
  );
};

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
  case compareValueKeys._version:
    return testRegex(reg, obj, compareValueKeys.version);
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