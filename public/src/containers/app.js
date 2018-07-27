import React from 'react';
import NavBar from './NavBar';
import { createClassName } from '../common/lib';
import ContentBody from './contentBody';
import ConnectedNav from '../view-navigation/vn-model';

export default class App extends React.PureComponent{
  render(){
    return (
      <div className={createClassName( 'flxr', 'txtcenter' )}>
        <ConnectedNav/>
      </div>
    );
  }
}