import React, { Component } from 'react';

export default class Column extends Component{

  render(){
    const styles = {
      display: this.props.display,
      float: this.props.float,
      width: this.props.width,
      backgroundColor: this.props.backgroundColor,
      textAlign: this.props.textAlign,
      marginBottom: this.props.marginBottom
    };
    return (
      <div className={'layout-column'} style={this.props.styles ? this.props.styles : styles}>
        { this.props.children }
      </div>
    );
  }
}