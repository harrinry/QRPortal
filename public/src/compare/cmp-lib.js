import React from 'react';
import { comparePrefix, SECTIONS, compareValueKeys, CLASSES } from './cmp-constants';
import { createClassName, COMMON_CLASSES } from 'common';

export const cmpQueryBuilder = ( extID, ver1, ver2 ) => `${comparePrefix}${SECTIONS.extensions}/${extID}/${ver1}/${ver2}`;

export const arrayChildConstructor = ( values, index, callback ) => {
  return (
    <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined)}>
      <td className={CLASSES.idCell}>{values.id}</td>
      <td className={CLASSES.nameCell}>{values.name}</td>
      <td className={CLASSES.versionCell}>{values.label}</td>
      <td className={createClassName(CLASSES.critical, values.critical ? COMMON_CLASSES.critical : undefined)}> </td>
    </tr>
  );
};

export const compareFunction = ( textValue, obj ) =>{
  let reg;
  try {
    reg = new RegExp( textValue, 'i' );
  } catch (error) {
    return [];
  }
  return (reg.test(obj[compareValueKeys.id]) || reg.test(obj[compareValueKeys.version]) || reg.test(obj[compareValueKeys.name]) || (textValue.toLowerCase() === compareValueKeys.critical ? obj.critical : false) ) ? true : false;
};