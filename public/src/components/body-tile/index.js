import React from 'react';
import PropTypes from 'prop-types';
import { createClassName, COMMON_CLASSES } from 'common/';
import { CLASSES, defaultIconURL } from './constants';
import './style.css';

const Tile = ( props ) => {
  return ( 
    <div className={createClassName(COMMON_CLASSES.txtCenter, CLASSES.tile, props.className)} style={stylize(props.iconURL)} onMouseDown={props.click} >
      <span className={CLASSES.nameFloatOnHover}>{props.children}</span>
    </div>);
};

function stylize( iconURL ){
  return {
    backgroundImage: iconURL ? 'url('+ iconURL +')' : defaultIconURL,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '80%'
  };
}

Tile.propTypes = {
  value: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  iconURL: PropTypes.string
};

export default Tile;