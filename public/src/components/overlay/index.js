import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES } from './constants';
import {createClassName} from 'common/';
import './style.css';

const Overlay = (props) => {
  const overlayRef = React.useRef();

  const onClickAway = (evt) => {
    const target = evt.target;

    if(target === overlayRef.current && props.onMouseClickOut) props.onMouseClickOut();
  };

  return (
    <div ref={overlayRef} onClick={onClickAway} className={createClassName(CLASSES.overlayContainer, props.visible ? CLASSES.visible : undefined)}>
      {props.children}
    </div> 
  );
};

Overlay.propTypes = {
  onMouseClickOut: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default Overlay;