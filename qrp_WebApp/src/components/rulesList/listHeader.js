import React from 'react';

export default class ListHeader extends React.PureComponent{
  render(){
    return(
      <th>{this.props.children}</th>
    );
  }
}