import React, { Component } from 'react';

export default class Column extends Component{

  render(){
    const style = {
      display: this.props.display ? this.props.display : 'inline-block',
      float: this.props.float ? this.props.float : 'left',
      width: this.props.width ? this.props.width : '30%',
      backgroundColor: this.props.backgroundColor,

    };
    return (
      <div className={'layout-column'} style={this.props.style ? this.props.style : style}>
        {this.props.children}
      </div>
    );
  }
}