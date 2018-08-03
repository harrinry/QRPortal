import React from 'react';
import { createClassName } from 'common/';
import NAV from 'nav/';
import Mktwrapper from 'marketing/';

export default class App extends React.PureComponent{
  render(){
    return (
      <div className={'flxc'}>
        <NAV/>
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