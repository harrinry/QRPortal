import React from 'react';
import ViewNavigation from 'view-navigation/';
import NavigationHeader from 'path-navigation/';
import GlobalSearch from 'global-search/';
import NavigationMenu from 'menu-navigation/';
import { createClassName, COMMON_CLASSES } from 'common/';
import { CLASSES } from './n-constants';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import './style.css';

const NavWrapper = ( props ) => {
  return (
    <div className={createClassName( 
      (props.viewType === VIEW_TYPES.MENU_VIEW ? CLASSES.navWrapper : undefined),
      (props.viewType === VIEW_TYPES.TILES_VIEW ? COMMON_CLASSES.flexRow : COMMON_CLASSES.flexCol), 
      COMMON_CLASSES.txtCenter )}>
      <ViewNavigation/>
      <NavigationHeader/>
      <GlobalSearch/>
      <NavigationMenu/>
    </div>
  );
};

export default NavWrapper;