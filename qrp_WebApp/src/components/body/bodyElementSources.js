import React from 'react';
import {EXTENTIONICONS} from '../index';

const cn = 'dropOnhover';

export default class BodyElementSources extends React.Component{
  render(){
    return ( <div className={this.props.className} style={this.stylize(this.props.value.toLowerCase())} onMouseDown={this.props.onclick} id={this.props.id} >
      <span className={cn}>{this.props.value}</span>
    </div>);
  }

  stylize( key ){
    const iconURL = EXTENTIONICONS[key];
    return {
      backgroundImage: iconURL ? 'url('+ iconURL +')' : undefined,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '80%'
    };
  }
}
