import React from 'react';
import MenuItem from '../menuItem/menuItem';
import { createClassName } from '../../common/lib';
import './style.css';

export default class NavItem extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    };
  }

  onExpand(){
    this.setState( (preState) => {
      return {
        isOpen: preState.isOpen ? false : true
      };
    });
  }

  render() {
    return (
      <div className={createClassName('NavItem', (this.state.isOpen ? 'Open' : undefined))} onClick={this.onExpand.bind(this)}>
        <div className={'flex-row'}>
          <div className={'Name'}>{this.props.name}</div>
          <div className={'DropDown'}></div>
        </div>
        <div className={'dropdown-container'}>{this.props.children.map( c => <MenuItem title={c.title} href={c.href} selected={c.selected} onClick={this.props.onItemClick}/> )}</div>
      </div>
    );
  }
}