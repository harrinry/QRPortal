import React from 'react';
import { createClassName } from '../../common/lib';
import './style.css';

export default class NavItem extends React.PureComponent {
  render() {
    return (
      <div className={createClassName('NavItem', this.props.open)}>
        <div className={'Name'}>{this.props.name}</div>
        <div className={'DropDown'}></div>
      </div>
    );
  }
}
