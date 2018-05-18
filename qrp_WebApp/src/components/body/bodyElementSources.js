import React from 'react';
import {EXTENTIONICONS, EXTENTIONNAMES} from '../index';

const cn = 'dropOnhover';

export default class BodyElementSources extends React.Component{
  render(){
    return ( <div className={this.props.className} style={this.stylize(this.props.value.toLowerCase())} onMouseDown={this.props.onclick} id={this.props.id} >
      <span className={cn}>{this.prettyPrint(this.props.value)}</span>
    </div>);
  }

  prettyPrint( key ){
    return EXTENTIONNAMES[key];
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
