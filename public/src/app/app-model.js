import React from 'react';
import { createClassName, COMMON_CLASSES } from 'common/';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import { CLASSES } from './app-constants';
import NAV from 'nav/';
import Mktwrapper from 'marketing/';

export default class App extends React.PureComponent{
  render(){
    const props = this.props;
    return (
      <div className={props.viewType === VIEW_TYPES.TILES_VIEW ? COMMON_CLASSES.flexCol : COMMON_CLASSES.flexRow }>
        <NAV/>
        <div className={createClassName(CLASSES.contentBody, COMMON_CLASSES.flexRow, COMMON_CLASSES.defaultBackgroundColor, COMMON_CLASSES.flexGrow1)}>
          <div className={'reserved_void'}></div>
          <div className={COMMON_CLASSES.detailsArea_mktContent}>
            <Mktwrapper />
          </div>
        </div>
      </div>
    );
  }
}