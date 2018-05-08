import React from 'react';
import { Technologies, Standards, Rules, Sources } from '../index';

export default class Body extends React.Component{
  render(){
    return (
      <div className='body'>
        <div className='static-UI'>
          <Standards />
          <Technologies />
          <Sources />
        </div>
        <div className='rules'>
          <Rules/>
        </div>
      </div>
    );
  }
}
