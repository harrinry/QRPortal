import React from 'react';
import { createClassName, restQuery } from '../common/lib';
import '../style/menuItem.css';

class MenuItem extends React.PureComponent{
  render(){
    return (<div className={createClassName('menuItem', (this.props.selected ? 'selected' : undefined))} 
      onClick={ () => restQuery( this.props.href, 
        ( res ) => this.props.onclick( this.props._ref, this.props.href, this.props.title, res.data))}>
      <span className={'menuItem-title'}>{this.props.title}</span>
    </div>);
  }
}

export default MenuItem;