import React from 'react';
import { COMMON_CLASSES } from 'common/';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import NAV from 'nav/';
import ContentBody from 'body/';

export default class App extends React.PureComponent{
  render(){
    const props = this.props;
    return (
      <div className={props.viewType === VIEW_TYPES.TILES_VIEW ? COMMON_CLASSES.flexCol : COMMON_CLASSES.flexRow }>
        <NAV/>
        <ContentBody/>
      </div>
    );
  }
}