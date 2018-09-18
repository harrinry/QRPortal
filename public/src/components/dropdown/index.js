import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES } from './constants';
import { createClassName } from 'common/';
import './style.css';

export default class SelectorElement extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    };
  }

  closeDropDown(){
    if (this.state.isOpen) this.setState( {isOpen: false} );
  }

  toggleDropDown(){
    this.setState({isOpen: !this.state.isOpen});
  }

  render(){
    return (
      <span className={CLASSES.container}>
        <div className={CLASSES.dropdownOverlay} onClick={this.closeDropDown}></div>
        <div className={CLASSES.dropDownElementContainer}>
          <div className={createClassName(CLASSES.trigger, CLASSES.closed)} onClick={this.toggleDropDown}></div>
          <div className={CLASSES.dropDownMenu}>{this.props.children}</div>
        </div>
      </span>
    );
  }
}