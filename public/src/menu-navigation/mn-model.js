import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from 'components/menu-submenu';
import MenuItem from 'components/menu-item';
import LoadingSpinner from 'components/loading-spinner';
import { COMMON_CLASSES, createClassName } from 'common/';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import { CLASSES, ITEMS } from './mn-constants';
import * as lib from './mn-lib';
import './style.css';

const NavigationMenu = ( props ) => {
  return (
    <div className={createClassName(CLASSES.menu, (props.viewType === VIEW_TYPES.TILES_VIEW ? COMMON_CLASSES.hidden : undefined ))}>
      <SubMenu title={ITEMS.STANDARDS}>
        <SubMenu title={ITEMS.BUSINESSCRITERIA} onClick={props.populateStd_bc}>
          {props.std_bc ? 
            props.std_bc.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
              props.setSelected(JSON.stringify(e));
              props.onItemClick(e.name, e.href);
            }}/>) : 
            <LoadingSpinner/>}
        </SubMenu>
        <SubMenu title={ITEMS.CISQ} onClick={props.populateStd_cisq}>
          {props.std_cisq ? 
            props.std_cisq.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
              props.setSelected(JSON.stringify(e));
              props.onItemClick(e.name, e.href);
            }}/>) : <LoadingSpinner/>}
        </SubMenu>
        <SubMenu title={ITEMS.OWASP} onClick={props.populateStd_owasp}>
          {props.std_owasp ? 
            props.std_owasp.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
              props.setSelected(JSON.stringify(e));
              props.onItemClick(e.name, e.href);
            }}/>) : <LoadingSpinner/>}
        </SubMenu>
      </SubMenu>
      <SubMenu title={ITEMS.TECHNOLOGIES} onClick={props.populateTechnologies}>
        {props.technologies ? 
          props.technologies.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
            props.setSelected(JSON.stringify(e));
            props.onItemClick(e.name, e.href);
          }}/>) : <LoadingSpinner/>}
      </SubMenu>
      <SubMenu title={ITEMS.EXTENTIONS} onClick={props.populateExtentions}>
        {props.extentions ? 
          props.extentions.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={lib.PrettyPrintExtentionName(e.name)} href={e.href} onClick={() => {
            props.setSelected(JSON.stringify(e));
            props.onItemClick(lib.PrettyPrintExtentionName(e.name), e.href);
          }}/>) : <LoadingSpinner/>}
      </SubMenu>
    </div>
  );
};

NavigationMenu.propTypes = {
  viewType: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default NavigationMenu;