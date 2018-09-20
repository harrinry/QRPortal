import { comparePrefix, SECTIONS, compareValueKeys } from './cmp-constants';

export const cmpQueryBuilder = ( extID, ver1, ver2 ) => `${comparePrefix}${SECTIONS.extensions}/${extID}/${ver1}/${ver2}`;

export const arrayChildConstructor = ( config ) => {

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