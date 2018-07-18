import React from 'react';
// import { createClassName } from '../common/lib';

export default class ArrayCell extends React.PureComponent{
  render(){
    return (
      this.props.header ? 
        <th>{this.props.children}</th> : 
        <td>
          <span className={this.props.critical ? 'critical' : undefined}>
            {this.props.critical ? ' ' : this.props.children}
          </span>
        </td>
    );
  }
}