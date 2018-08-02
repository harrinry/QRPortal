import React from 'react';
import { createClassName } from '../common/lib';
import NavHeader from '../navigation-header/nv-model';
import ConnectedNav from '../view-navigation/vn-model';
import Mktwrapper from '../marketing/mkt-connectedModel';

export default class App extends React.PureComponent{
  render(){
    return (
      <div className={'flxc'}>
        <div className={createClassName( 'flxr', 'txtcenter' )}>
          <ConnectedNav/>
          <NavHeader/>
        </div>
        <div className={createClassName('contentBody', 'flxr', 'std-bgc', 'flxGrw1')}>
          <div className={'reserved_void'}></div>
          <div className={'qrp_details_mkt_zone'}>
            <Mktwrapper />
          </div>
        </div>
      </div>
    );
  }
}