import React from 'react';
import ViewNavigation from 'view-navigation/';
import NavigationHeader from 'path-navigation/';
import GlobalSearch from 'global-search/';
import { createClassName, COMMON_CLASSES } from 'common/';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import './style.css';

// temp
import SubMenu from '../components/menu-submenu/index';
import MenuItem from '../components/menu-item/index';
//
const NavWrapper = ( props ) => {
  return (
    <div className={createClassName( 
      (props.viewType === VIEW_TYPES.TILES_VIEW ? COMMON_CLASSES.flexRow : COMMON_CLASSES.flexCol), 
      COMMON_CLASSES.txtCenter )}>
      <ViewNavigation/>
      <NavigationHeader/>
      <GlobalSearch/>
      <div className={'temp_menu'}>
        <SubMenu title={'Standards'}>
          <SubMenu title='CAST Business Criteria'>
            <SubMenu title='test1'>
              <SubMenu title='test2'>
                <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
              </SubMenu>
            </SubMenu>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          </SubMenu>
          <SubMenu title='OWASP'>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          </SubMenu>
          <SubMenu title='CISQ'>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
            <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          </SubMenu>
        </SubMenu>
        <SubMenu title={'Technologies'}>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
        </SubMenu>
        <SubMenu title={'Sources'}>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
          <MenuItem onClick={() => console.log('item clicked')} selected={false} href='#' title='item'/>
        </SubMenu>
      </div>
    </div>
  );
};

export default NavWrapper;