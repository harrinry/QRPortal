import React from 'react';
import propTypes from 'prop-types';
import { createClassName, COMMON_CLASSES } from 'common/';
import { CLASSES } from './constants';
import './style.css';

const MenuItem = ( {selected, title, href, onClick} ) => {
  return (
    <div className={createClassName(CLASSES.menuItem, (selected ? COMMON_CLASSES.selected : undefined))} 
      onClick={ (e) => {
        e.stopPropagation();
        return onClick( href, title); 
      }}>
      <span className={CLASSES.title}>{title}</span>
    </div>
  );
};

MenuItem.propTypes = {
  selected: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
  href: propTypes.string.isRequired,
  title: propTypes.string.isRequired
};

export default MenuItem;