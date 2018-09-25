import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES } from './constants';
import {createClassName} from 'common/';
import './style.css';

const Overlay = (props) => {
  const styles = {
    height: props.height,
    width: props.width,
    backgroundColor: props.backgroundColor,
  };
  return (
    <div onClick={props.onMouseClickOut} className={createClassName(CLASSES.overlayContainer, props.visible ? CLASSES.visible : undefined)}>
      <div className={CLASSES.overlayBody} style={styles}>
        {this.props.children}
      </div>
    </div> 
  );
};

Overlay.propTypes = {
  onMouseClickOut: PropTypes.func.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  visible: PropTypes.bool.isRequired
};