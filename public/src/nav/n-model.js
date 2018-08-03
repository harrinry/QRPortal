import React from 'react';
import ViewNavigation from 'view-navigation/';
import NavigationHeader from 'path-navigation/';
import GlobalSearch from 'global-search/';
import { createClassName, COMMON_CLASSES } from 'common/';
import { VIEW_TYPES } from 'view-navigation/vn-constants';

const NavWrapper = ( props ) => {
  return (
    <div className={createClassName( 
      (props.viewType === VIEW_TYPES.TILES_VIEW ? COMMON_CLASSES.flexRow : COMMON_CLASSES.flexCol), 
      COMMON_CLASSES.txtCenter )}>
      <ViewNavigation/>
      <NavigationHeader/>
      <GlobalSearch/>
    </div>
  );
};

export default NavWrapper;