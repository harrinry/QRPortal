import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES } from './constants';
import './style.css';

export default class SelectorElement extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    }
  }

  render(){
    return (
      <span className={CLASSES.container}>
        <div className={CLASSES.dropdownOverlay} onClick={}></div>
      </span>
    );
  }
}