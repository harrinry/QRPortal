import React from 'react';

const cn = 'dropOnhoverLarge';

export default class BodyElement extends React.Component{

  render(){
    return ( <div className={this.props.className} onMouseDown={this.props.onclick} id={this.props.id} title={this.props.title}>
      {this.props.href ? <a href={this.props.href}>{this.props.value}</a> : <span className={ this.props.slideDown ? cn : undefined}>{this.props.value}</span>}
    </div> );
  }
}
