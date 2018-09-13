import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from 'components/menu-submenu';
import MenuItem from 'components/menu-item';
import LoadingSpinner from 'components/loading-spinner';
import { COMMON_CLASSES, createClassName } from 'common/';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import { CLASSES, ITEMS } from './mn-constants';
import './style.css';

const NavigationMenu = ( props ) => {
  return (
    <div className={createClassName(CLASSES.menu, (props.viewType === VIEW_TYPES.TILES_VIEW ? COMMON_CLASSES.hidden : undefined ))}>
      <SubMenu title={ITEMS.STANDARDS}>
<<<<<<< HEAD
        <SubMenu title={ITEMS.BUSINESSCRITERIA} onClick={props.populateStd_bc} cssClass={CLASSES.standardsSubMenu}>
          {props.std_bc.data ? 
            props.std_bc.data.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
=======
        <SubMenu title={ITEMS.BUSINESSCRITERIA} onClick={props.populateStd_bc} cssClass={createClassName(COMMON_CLASSES.fontWeight400, CLASSES.standardsSubMenu)}>
          {props.std_bc.data ?
            props.std_bc.data.map( (e, i) => <MenuItem key={i} selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
>>>>>>> backend_dev_msu
              props.setSelected(JSON.stringify(e));
              props.onBusinessCriteriaClick(e.name, e.href);
            }}/>) : ( props.std_bc.loading ? <LoadingSpinner/> : undefined )}
        </SubMenu>
<<<<<<< HEAD
        <SubMenu title={ITEMS.CISQ} onClick={props.populateStd_cisq} cssClass={CLASSES.standardsSubMenu}>
          {props.std_cisq.data ? 
            props.std_cisq.data.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
=======
        <SubMenu title={ITEMS.CISQ} onClick={props.populateStd_cisq} cssClass={createClassName(COMMON_CLASSES.fontWeight400, CLASSES.standardsSubMenu)}>
          {props.std_cisq.data ?
            props.std_cisq.data.map( (e, i) => <MenuItem key={i} selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
>>>>>>> backend_dev_msu
              props.setSelected(JSON.stringify(e));
              props.onCisqClick(e.name, e.href);
            }}/>) : ( props.std_cisq.loading ? <LoadingSpinner/> : undefined )}
        </SubMenu>
<<<<<<< HEAD
        <SubMenu title={ITEMS.OWASP} onClick={props.populateStd_owasp} cssClass={CLASSES.standardsSubMenu}>
          {props.std_owasp.data ? 
            props.std_owasp.data.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
=======
        <SubMenu title={ITEMS.OWASP} onClick={props.populateStd_owasp} cssClass={createClassName(COMMON_CLASSES.fontWeight400, CLASSES.standardsSubMenu)}>
          {props.std_owasp.data ?
            props.std_owasp.data.map( (e, i) => <MenuItem key={i} selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
>>>>>>> backend_dev_msu
              props.setSelected(JSON.stringify(e));
              props.onOwaspClick(e.name, e.href);
            }}/>) : ( props.std_owasp.loading ? <LoadingSpinner/> : undefined )}
        </SubMenu>
      </SubMenu>
      <SubMenu title={ITEMS.TECHNOLOGIES} onClick={props.populateTechnologies}>
        {props.technologies.data ?
          props.technologies.data.map( (e, i) => <MenuItem key={i} selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
            props.setSelected(JSON.stringify(e));
            props.onTechnologyClick(e.name, e.href);
          }}/>) : ( props.technologies.loading ? <LoadingSpinner/> : undefined )}
      </SubMenu>
      <SubMenu title={ITEMS.EXTENSIONS} onClick={props.populateExtensions}>
<<<<<<< HEAD
        {props.extensions.data ? 
          props.extensions.data.map( e => (<SubMenu title={e.name} onClick={(exeCount) => props.fetchVersion(exeCount, e)}>
            {e.versions ? e.versions.map( ver => <MenuItem selected={props.selected === JSON.stringify(ver) ? true : false} title={ver.name} href={ver.href} onClick={() => {
=======
        {props.extensions.data ?
          props.extensions.data.map( (e, i) => (<SubMenu key={i} title={e.name} onClick={(exeCount) => props.fetchVersion(exeCount, e)}>
            {e.versions ? e.versions.map( (ver, vi) => <MenuItem key={vi} selected={props.selected === JSON.stringify(ver) ? true : false} title={ver.name} href={ver.href} onClick={() => {
>>>>>>> backend_dev_msu
              props.setSelected(JSON.stringify(ver));
              props.onExtensionsClick(e, ver);
            }}/> ) : ( e.loading ? <LoadingSpinner/> : undefined )}
          </SubMenu>)) : ( props.extensions.loading ? <LoadingSpinner/> : undefined )}
      </SubMenu>
    </div>
  );
};

NavigationMenu.propTypes = {
  viewType: PropTypes.string.isRequired,
  onExtensionsClick: PropTypes.func.isRequired,
  onElementClick: PropTypes.func.isRequired,
  onQualityStandardClick: PropTypes.func.isRequired,
};

export default NavigationMenu;
