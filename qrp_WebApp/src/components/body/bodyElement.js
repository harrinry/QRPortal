import React from 'react';

const className = 'bodyElement inline';

export default class BodyElement extends React.Component{
  render(){
    return ( <div className={className} onMouseDown={this.props.onclick} id={this.props.id} title={this.props.title}>
      {this.props.href ? <a href={this.props.href}>{this.props.value}</a> : this.props.value}
    </div> );
  }
}