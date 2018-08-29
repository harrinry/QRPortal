import React from 'react';
import { COMMON_CLASSES, createClassName } from 'common/';
import { CLASSES, NAVIGATION_VIEW } from './body-constants';
import { VerticalArray } from 'components/';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
// import DetailsSection from 'details-section/';
import './style.css';

const ContentBody = ( props ) => {
  const viewTypeClass = props.viewType === VIEW_TYPES.MENU_VIEW ? CLASSES.maxNavHeight : CLASSES.maxTileHeight;
  return (
    <div className={createClassName(CLASSES.contentBody, COMMON_CLASSES.flexRow, COMMON_CLASSES.defaultBackgroundColor, COMMON_CLASSES.flexGrow1, viewTypeClass)}>
      {props.view === NAVIGATION_VIEW ? 
        (<div className={CLASSES.contentSpace}>

        </div>) : 
        (<div>
          <div className={CLASSES.listArea}>
            <VerticalArray onItemClick={(i)=>props.onItemClick(i, 0, props.list.count)} 
              values={['id', 'name', 'critical']}
              headers={['ID', 'Name', 'Critical']}>{props.list.content.data}</VerticalArray>
          </div>
          <div className={CLASSES.detailsArea}>
            {/* <DetailsSection/> */}
          </div>
        </div>)}
    </div>);
};

export default ContentBody;