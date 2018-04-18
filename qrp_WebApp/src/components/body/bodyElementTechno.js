import React from 'react';
import {ICONURLS} from '../index';

export default class BodyElementTechno extends React.Component{
  render(){
    return ( <div className={this.props.className} style={this.stylize(this.props.value.toLowerCase())} onMouseDown={this.props.onclick} id={this.props.id} title={this.props.title}>
      {this.props.href ? <a href={this.props.href}>{this.props.value}</a> : <span>{this.props.value}</span>}
    </div> );
  }

  stylize( key ){
    const iconURL = ICONURLS[key];
    return {
      backgroundImage: iconURL ? 'url('+ iconURL +')' : undefined,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '80%'
    };
  }
}
