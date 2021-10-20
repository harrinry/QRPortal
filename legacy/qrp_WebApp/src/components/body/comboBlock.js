import React from 'react';
import { SlidedownMenu } from '../index';

export default class ComboBlock extends React.Component{
  render(){
    return (<div className='bodyElement-container'>
      {this.props.children}
      <SlidedownMenu>{this.props.menuElements}</SlidedownMenu>
    </div>);
  }
}