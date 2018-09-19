import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES, KEYS } from './constants';
import { createClassName, COMMON_CLASSES } from 'common/';
import './style.css';

const List = ( props ) => {
  const vertical = props.vertical ? KEYS.vertical : undefined;
  const horizontal = props.horizontal ? KEYS.horizontal : undefined;
  const direction = vertical && horizontal ? horizontal : ( horizontal || vertical );
  return (
    <div className={ createClassName( CLASSES.list, direction === vertical ? COMMON_CLASSES.flexCol : COMMON_CLASSES.flexRow ) }>
      {props.children}
    </div>
  );
};

List.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default List;