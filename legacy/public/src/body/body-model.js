import React from 'react';
import PropTypes from 'prop-types';
import { COMMON_CLASSES, createClassName } from 'common/';
import { CLASSES, NAVIGATION_VIEW, LANDING_PAGE } from './body-constants';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
//import Menu from 'menu-navigation/';
import BodyRulesList from 'body-rules-list/';
import RuleDetails from 'details-section/';
import StandardsList from 'body-standards-list';
import TileNavigation from 'body-navigation';
import LandingPage from 'body-landing-page';
import CompareList from 'compare/';
import './style.css';

const ContentBody = ( props ) => {
  return (
    <div className={createClassName(CLASSES.contentSpace,COMMON_CLASSES.flexRow, COMMON_CLASSES.defaultBackgroundColor)}>
      {/* <Menu/> */}
      <div className={createClassName(CLASSES.contentBody, COMMON_CLASSES.flexRow, COMMON_CLASSES.defaultBackgroundColor, COMMON_CLASSES.flexGrow1, CLASSES.maxTileHeight)}>
        {props.view === NAVIGATION_VIEW || props.view === LANDING_PAGE ? 
          (<div className={CLASSES.contentSpace}>
            {props.view === LANDING_PAGE ? <LandingPage/> : <TileNavigation/>}
          </div>) : 
          (<div className={createClassName( 
            props.viewType === VIEW_TYPES.TILES_VIEW 
              ? COMMON_CLASSES.width100pc 
              : COMMON_CLASSES.width100calc, 
            CLASSES.contentBodyChild)}>
            <div className={CLASSES.listArea}>
              { props.listCount === 2 && !props.searchVisible ? <StandardsList/> : undefined}
              { props.isComparing && props.cmpIsVisible ? <CompareList/> : <BodyRulesList/>}
            </div>
            <div className={CLASSES.detailsArea}>
              <RuleDetails />
            </div>
          </div>)}
      </div>
    </div>);
};

ContentBody.propTypes = {
  view: PropTypes.string.isRequired,
  listCount: PropTypes.number.isRequired,
  viewType: PropTypes.string.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  isComparing: PropTypes.bool.isRequired
};

export default ContentBody;