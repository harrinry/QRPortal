import React from 'react';
import PropTypes from 'prop-types';
import { createClassName, COMMON_CLASSES } from '../../common/index.js';

const VerticalArray = (props) => {
  const headers = [...props.headers];
  return (<div className={createClassName('verticalArray',COMMON_CLASSES.flexCol)}>
    <div className={createClassName('headerContainer', COMMON_CLASSES.flexRow)}>
      <div className={'itemCounter'}>{props.children.length + ' Rules'}</div>
      <div className={'internalSearch&filter'}>
        <input placeholder={'Filter Rules'}></input>
      </div>
    </div>
    <div className={createClassName('TableContainer', COMMON_CLASSES.flexCol, COMMON_CLASSES.overflowY)}>
      <table>
        <tbody>
          {headers.map(h => <th>{h}</th>)}
        </tbody>
      </table>
    </div>
  </div>);
};

VerticalArray.propTypes = {
  headers: PropTypes.array.isRequired,
  children: PropTypes.array.isRequired
};

export default VerticalArray;