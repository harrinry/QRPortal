import React from 'react';
import ViewNavigation from 'view-navigation/';
import NavigationHeader from 'path-navigation/';
import GlobalSearch from 'global-search/';
import { createClassName, COMMON_CLASSES } from 'common/';
import { CLASSES } from './n-constants';
import './style.css';

const NavWrapper = () => {
  return (
    <div className={createClassName( 
      COMMON_CLASSES.flexRow, 
      COMMON_CLASSES.txtCenter, 
      CLASSES.container )}>
      <ViewNavigation/>
      <NavigationHeader/>
      <GlobalSearch/>
    </div>
  );
};

export default NavWrapper;