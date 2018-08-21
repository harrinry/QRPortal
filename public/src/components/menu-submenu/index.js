import React from 'react';
import propTypes from 'prop-types';
import { createClassName, COMMON_CLASSES } from '../../common/index';
import { CLASSES } from './constants';
import './style.css';

class SubMenu extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    };
  }
  
  toggleMenu(e){
    e.stopPropagation();
    this.setState( ( _state ) => { return { isOpen: !_state.isOpen }; } );
  }

  render(){
    const { title, children } = this.props,
      isOpen = this.state.isOpen;
    return (
      <div className={createClassName(CLASSES.subMenu, COMMON_CLASSES.flexCol)} onClick={this.toggleMenu.bind(this)} >
        <div className={CLASSES.title}>{title}</div>
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