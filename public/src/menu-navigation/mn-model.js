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
          {props.std_bc.data ? 
            props.std_bc.data.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
              props.setSelected(JSON.stringify(e));
              props.onBusinessCriteriaClick(e.name, e.href);
            }}/>) : ( props.std_bc.loading ? <LoadingSpinner/> : undefined )}
        </SubMenu>
        <SubMenu title={ITEMS.CISQ} onClick={props.populateStd_cisq}>
          {props.std_cisq.data ? 
            props.std_cisq.data.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
              props.setSelected(JSON.stringify(e));
              props.onQualityStandardClick(e.name, e.href);
            }}/>) : ( props.std_cisq.loading ? <LoadingSpinner/> : undefined )}
        </SubMenu>
        <SubMenu title={ITEMS.OWASP} onClick={props.populateStd_owasp}>
          {props.std_owasp.data ? 
            props.std_owasp.data.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
              props.setSelected(JSON.stringify(e));
              props.onQualityStandardClick(e.name, e.href);
            }}/>) : ( props.std_owasp.loading ? <LoadingSpinner/> : undefined )}
        </SubMenu>
      </SubMenu>
      <SubMenu title={ITEMS.TECHNOLOGIES} onClick={props.populateTechnologies}>
        {props.technologies.data ? 
          props.technologies.data.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={e.name} href={e.href} onClick={() => {
            props.setSelected(JSON.stringify(e));
            props.onTechnologyClick(e.name, e.href);
          }}/>) : ( props.technologies.loading ? <LoadingSpinner/> : undefined )}
      </SubMenu>
      <SubMenu title={ITEMS.EXTENSIONS} onClick={props.populateExtensions}>
        {props.extensions.data ? 
          props.extensions.data.map( e => <MenuItem selected={props.selected === JSON.stringify(e) ? true : false} title={lib.PrettyPrintExtentionName(e.title)} href={e.href} onClick={() => {
            props.setSelected(JSON.stringify(e));
            props.onExtensionsClick(lib.PrettyPrintExtentionName(e.title), e.href);
          }}/>) : ( props.extensions.loading ? <LoadingSpinner/> : undefined )}
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