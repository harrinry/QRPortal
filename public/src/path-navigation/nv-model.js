import React from 'react';
import PropTypes from 'prop-types';
import { CLASSES, SEARCHFOR} from './nv-constants';
import { createClassName, COMMON_CLASSES } from 'common/';
import { PathElement } from './nv-lib';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import { DropdownSelector } from '../components';
import './style.css';

const NavHeader = ( props ) =>{
  const pl = props.path ? props.path.length : undefined;
  return (
    <div className={createClassName(CLASSES.headerMain, (props.viewType === VIEW_TYPES.MENU_VIEW ? COMMON_CLASSES.hidden : undefined ))}>
      <div className={CLASSES.pathContainer}>
        { props.searchVisible ? <PathElement rules={props.rules} path={props.path} separator={false} index={0} name={SEARCHFOR + props.searchQuery} closeBtn={true} onCloseBtnClick={props.closeSearchResults}/> :
          props.path.map((e, index) => {
            if ( Array.isArray(e) ) {
              return <DropdownSelector key={index} list={e} onItemClick={props.selectorChange}/> ;
            } else return (<PathElement key={index} separator={index !== pl - 1 && index !== 0} showIcon={index === 0} index={index} gotoLocation={props.gotoLocation} name={e.name} href={e.href} icon={e.icon}/>);
          })}
      </div>
    </div>
  );
};

NavHeader.propTypes = {
  path: PropTypes.arrayOf(PropTypes.any),
  searchVisible: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string
};

export default NavHeader;
