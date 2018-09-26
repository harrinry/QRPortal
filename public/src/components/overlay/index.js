import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES } from './constants';
import {createClassName} from 'common/';
import './style.css';

const Overlay = (props) => {
  return (
    <div onClick={props.onMouseClickOut} className={createClassName(CLASSES.overlayContainer, props.visible ? CLASSES.visible : undefined)}>
      {props.children}
    </div> 
  );
};

Overlay.propTypes = {
  onMouseClickOut: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default Overlay;