import React from 'react';
import { CLASSES, TYPES, SEARCHFOR} from './nv-constants';
import { createClassName, COMMON_CLASSES } from 'common/';
import PathElement from './nv-pathItem';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import './style.css';

const NavHeader = ( props ) =>{
  const pl = props.path ? props.path.length : undefined;
  return (
    <div className={createClassName(CLASSES.headerMain, (props.viewType === VIEW_TYPES.MENU_VIEW ? COMMON_CLASSES.hidden : undefined ))}>
      <div className={CLASSES.pathContainer}>
        { props.searchVisible ? <PathElement rules={props.rules} separator={false} index={0} name={SEARCHFOR} closeBtn={true} onCloseBtnClick={props.closeSearchResults}/> : 
          props.path.map((e, index) => {
            if (e.type === TYPES.selector ) {
              return ;
            } else return (<PathElement key={index} separator={index !== pl - 1} index={index} gotoLocation={props.gotoLocation} name={e.name} href={e.href} icon={e.icon}/>);
          })}
      </div>
    </div>
  );
};

export default NavHeader;