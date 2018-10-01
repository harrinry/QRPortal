import React from 'react';
import { compareValueKeys } from './bsl-constants';
import { COMMON_CLASSES, createClassName } from 'common/';
import { CLASSES } from './bsl-constants';

export const compareFunction = ( textValue, obj ) =>{
  let reg;
  try {
    reg = new RegExp( textValue, 'i' );
  } catch (error) {
    return [];
  }
  return (reg.test(obj[compareValueKeys.id]) || reg.test(obj[compareValueKeys.name]) ) ? true : false;
};

export const childConstructor = ( values, index, callback, showinfocb ) => {
  return (
    <tr key={index} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined)}>
      <td onClick={callback} className={createClassName(CLASSES.standardsRow, values.count === 0 ? CLASSES.emptyContent : undefined)}>
        <div className={CLASSES.cellContainer}>
          <div className={CLASSES.idCell}>{values.id}</div>
          <div className={CLASSES.nameCell}>{values.name}</div>
        </div></td>
      {/* <td onClick={showinfocb} className={CLASSES.infoCell}>
        <div className={COMMON_CLASSES.infoIcon}></div>
      </td> */}
    </tr>
  );
};