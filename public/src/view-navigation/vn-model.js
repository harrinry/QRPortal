import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createClassName } from '../common/lib';
import { CLASSES, VIEW_TYPES, ILP } from './vn-constants';
import { setMenuView, setTilesView, goToLandingPage } from './vn-actions';
import './style.css';

const lang = 'EN'; // currently only default available

const Nav = ( props ) => {
  const viewTypeIsMenu = props.viewType === VIEW_TYPES.MENU_VIEW ? true : false;
  return (
    <div className={createClassName(CLASSES.navBarHeader, CLASSES.fixed, (viewTypeIsMenu ? CLASSES.expanded: undefined ))}>
      <div className={createClassName(CLASSES.navIcon, CLASSES.extraRightMargin)} onClick={props.goToLandingPage}>
        <img src={'img/LogoStructuralRules.svg'} className={CLASSES.imgIcon} alt='logo' />
      </div>
      { viewTypeIsMenu ? <div className={CLASSES.navTitle}>{ILP[lang].title}</div> : undefined }
      <div className={CLASSES.navIcon}  onClick={props.setTilesView}>
        <img src={'img/tiles.svg'} className={CLASSES.imgIcon} alt='Tiles' />
      </div>
      <div className={CLASSES.navIcon}  onClick={props.setMenuView}>
        <img src={'img/list.svg'} className={CLASSES.imgIcon} alt='Menu' />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTilesView: () => {
      dispatch(setTilesView());
    },
    setMenuView: () => {
      dispatch(setMenuView());
    },
    goToLandingPage: () => {
      console.log('return to landing page');
      dispatch(goToLandingPage());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.VIEW_TYPE
  };
};

Nav.propTypes = {
  viewType: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
