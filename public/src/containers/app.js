import React from 'react';
import { createClassName } from '../common/lib';
import MktContent from '../marketing/mkt-connectedModel';
//import ConnectedNav from '../view-navigation/vn-model';

export default class App extends React.PureComponent{
  render(){
    return (
      <div className={createClassName( 'flxr', 'txtcenter' )}>
        {/* <ConnectedNav/> */}
        <MktContent />
      </div>
    );
  }
}