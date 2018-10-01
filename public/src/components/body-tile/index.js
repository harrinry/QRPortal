import React from 'react';
import PropTypes from 'prop-types';
import { createClassName, COMMON_CLASSES } from 'common/';
import { CLASSES, defaultIconURL } from './constants';
import './style.css';

const Tile = ( props ) => {
  return ( 
    <div className={CLASSES.tileContainer}>
      <div className={createClassName(COMMON_CLASSES.txtCenter, CLASSES.tile, props.className)} style={stylize(props.icon, props.iconSize)} onClick={(event) => {
        switch (event.button) {
        case 0:
          return props.click();
        default:
          return;
        }
      }} >
        <span className={CLASSES.nameFloatOnHover}>{props.children}</span>
      </div>
    </div>);
};

function stylize( icon, bgSize ){
  return {
    backgroundImage: icon ? 'url(' + icon + ')' : defaultIconURL,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: bgSize ? bgSize : '80%'
  };
}

Tile.propTypes = {
  click: PropTypes.func.isRequired,
  icon: PropTypes.string
};
 
export default Tile;