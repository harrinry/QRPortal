import React from 'react';
import { createClassName, isEcho } from 'common/';
import { CLASSES, VIEW_TYPES, Imgs } from './vn-constants';

import './style.css';

const ViewNavigation = ( props ) => {
  const viewTypeIsMenu = props.viewType === VIEW_TYPES.MENU_VIEW ? true : false;
  return (
    <div className={createClassName(CLASSES.navBarHeader, CLASSES.fixed, (viewTypeIsMenu ? CLASSES.expanded: undefined ))}>
      <div className={createClassName(CLASSES.navIcon, CLASSES.extraRightMargin)} onClick={props.goToLandingPage}>
        <img src={ (isEcho() ? Imgs.owllogo.default : Imgs.logo.default ) } className={CLASSES.imgIcon} alt={props.language.logo} />
      </div>
      {/* { viewTypeIsMenu ? <div className={CLASSES.navTitle}>{props.language.title}</div> : undefined }
      <div className={CLASSES.navIcon}  onClick={props.setTilesView}>
        <img src={viewTypeIsMenu ? Imgs.tiles.grey : Imgs.tiles.black} className={CLASSES.imgIcon} alt={props.language.tiles} />
      </div>
      <div className={CLASSES.navIcon}  onClick={() => props.setMenuView(props.viewType)}>
        <img src={viewTypeIsMenu ? Imgs.menu.black : Imgs.menu.grey} className={CLASSES.imgIcon} alt={props.language.menu} />
      </div> */}
    </div>
  );
};

export default ViewNavigation;
