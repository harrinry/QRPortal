import React from 'react';
import { Technologies, Standards, Rules, Sources } from '../index';

export default class Body extends React.Component{
  render(){
    return (
      <div className='body'>
        <div className='static-UI'>
          <p className="WelcomeTitle">Welcome to the CAST Structural Rules Portal, let&#39;s start browsing or searching the rules<span>BETA</span></p>
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
