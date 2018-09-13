import React from 'react';
import PropTypes from 'prop-types';
import { createClassName, COMMON_CLASSES } from 'common/';
import { CLASSES, defaultIconURL } from './constants';
import './style.css';

const Tile = ( props ) => {
  return ( 
    <div className={createClassName(COMMON_CLASSES.txtCenter, CLASSES.tile, props.className)} style={stylize(props.icon)} onMouseDown={props.click} >
      <span className={CLASSES.nameFloatOnHover}>{props.children}</span>
    </div>);
};

function stylize( icon ){
  return {
    backgroundImage: icon ? 'url(' + icon + ')' : defaultIconURL,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '80%'
  };
}

Tile.propTypes = {
  click: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
};

export default Tile;