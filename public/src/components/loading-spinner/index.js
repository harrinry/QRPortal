import React from 'react';
import { spinner } from './constants';
import { createClassName, COMMON_CLASSES } from 'common/';
import './style.css';

const LoadingSpinner = () => {
  return (
    <div className={createClassName(spinner, COMMON_CLASSES.marginAuto)}></div>
  );
};

export default LoadingSpinner;