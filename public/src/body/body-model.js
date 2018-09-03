import React from 'react';
import { COMMON_CLASSES, createClassName } from 'common/';
import { CLASSES, NAVIGATION_VIEW, LANDING_PAGE } from './body-constants';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import BodyRulesList from 'body-rules-list/';
// import DetailsSection from 'details-section/';
import './style.css';

const ContentBody = ( props ) => {
  const viewTypeClass = props.viewType === VIEW_TYPES.MENU_VIEW ? CLASSES.maxNavHeight : CLASSES.maxTileHeight;
  return (
    <div className={createClassName(CLASSES.contentBody, COMMON_CLASSES.flexRow, COMMON_CLASSES.defaultBackgroundColor, COMMON_CLASSES.flexGrow1, viewTypeClass)}>
      {props.view === NAVIGATION_VIEW || props.view === LANDING_PAGE ? 
        (<div className={CLASSES.contentSpace}>

        </div>) : 
        (<div className={COMMON_CLASSES.width100pc}>
          <div className={CLASSES.listArea}>
            <BodyRulesList/>
            {/* <VerticalArray onItemClick={(i)=>props.onItemClick(i, 0, props.list.count)} 
              values={['id', 'name', 'critical']}
              headers={['ID', 'Name', 'Critical']}>{ props.searchVisible ? (props.searchResults.length === 0 ? [{name:'No Results Found'}] : props.searchResults) : props.list.content.data}</VerticalArray> */}
          </div>
          <div className={CLASSES.detailsArea}>
            {/* <DetailsSection/> */}
          </div>
        </div>)}
    </div>);
};

export default ContentBody;