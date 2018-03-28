import React from 'react';
import { Technologies, Standards } from '../index';

export default class Body extends React.Component{
  render(){
    return (
      <div className='body'>
        <Standards />
        <Technologies />
      </div>
    );
  }
}