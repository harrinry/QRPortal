import React from 'react';
import { Technologies, Standards, Rules } from '../index';

export default class Body extends React.Component{
  render(){
    return (
      <div className='body'>
        <div className='static-UI'>
          <Standards />
          <Technologies />
        </div>
        <div className='rules'>
          <Rules/>
        </div>
      </div>
    );
  }
}
