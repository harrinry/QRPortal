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

    this.closeDropDown = this.closeDropDown.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
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
        <div className={CLASSES.dropDownElementContainer}>
          <div className={CLASSES.trigger} onClick={this.toggleDropDown}>{this.props.label}</div>
          <div className={createClassName(CLASSES.dropDownMenu, this.state.isOpen ? undefined : CLASSES.closed)}>{this.props.children}</div>
        </div>
        {this.state.isOpen ? <div className={CLASSES.dropdownOverlay} onClick={this.closeDropDown}></div> : undefined}
      </span>
    );
  }
}