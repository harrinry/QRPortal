import React from 'react';
import propTypes from 'prop-types';
import { createClassName, COMMON_CLASSES } from 'common/index';
import { CLASSES } from './constants';
import './style.css';

class SubMenu extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      exeCount: 0
    };
  }
  
  toggleMenu(e){
    e.stopPropagation();
    this.setState( ( _state ) => { return { isOpen: !_state.isOpen }; } );
    if( this.props.onClick ) {
      this.props.onClick(this.state.exeCount);
      this.setState( ( _state ) => { return { isOpen: _state.isOpen, exeCount: _state.exeCount + 1 }; } );
    }
  }

  render(){
    const { title, children } = this.props,
      isOpen = this.state.isOpen;
    return (
      <div className={createClassName(CLASSES.subMenu, COMMON_CLASSES.flexCol)} onClick={this.toggleMenu.bind(this)} >
        <div className={createClassName(CLASSES.title, (isOpen ? COMMON_CLASSES.fontWeightHeavy : undefined))}>{title}</div>
        <div className={createClassName(CLASSES.dropdown, (isOpen ? COMMON_CLASSES.flexCol : undefined) )}>
          {children}
        </div>
      </div>
    );
  }
}

SubMenu.propTypes = {
  children: propTypes.array.isRequired,
  title: propTypes.string.isRequired
};

export default SubMenu;