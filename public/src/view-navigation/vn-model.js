import React from 'react';
import { connect } from 'react-redux';
import { createClassName } from '../common/lib';
import { CLASSES, VIEW_TYPES, ILP } from './vn-constants';
import { setMenuView, setTilesView } from './vn-actions';
import './style.css';

const lang = 'EN'; // currently only default available

const Nav = ( props ) => {
  const viewTypeIsMenu = props.viewType === VIEW_TYPES.MENU_VIEW ? true : false;
  return (
    <div className={createClassName(CLASSES.navBarHeader, CLASSES.fixed, (viewTypeIsMenu ? CLASSES.expanded: undefined ))}>
      <div className={CLASSES.navIcon}>
        <img src={'img/LogoStructuralRules.svg'} className={CLASSES.imgIcon} alt='logo' />
      </div>
      { viewTypeIsMenu ? <div className={CLASSES.navTitle}>{ILP[lang].title}</div> : undefined }
      <div className={CLASSES.navIcon}  onClick={props.setTilesView}>Tiles</div>
      <div className={CLASSES.navIcon}  onClick={props.setMenuView}>Menu</div>
      <div> {props.viewType} </div>
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
    }
  };
};

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.VIEW_TYPE
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
