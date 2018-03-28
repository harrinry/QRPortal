import React from 'react';

export default class BodyElement extends React.Component{
  render(){
    return ( <div className='bodyElement inline' onMouseDown={this.props.onclick} id={this.props.id}>
      {this.props.href ? <a href={this.props.href}>{this.props.value}</a> : this.props.value}
    </div> );
  }
}