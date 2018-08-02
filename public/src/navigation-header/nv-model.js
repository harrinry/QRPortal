import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CLASSES } from './nv-constants';
import { createClassName, COMMON_CLASSES } from '../common/lib';
import PathElement from './nv-pathItem';
import { navigateTo } from './nv-actions';
import { VIEW_TYPES } from '../view-navigation/vn-constants';
import './style.css';

const NavHeader = ( props ) =>{
  const pl = props.path ? props.path.length : undefined;
  return (
    <div className={createClassName(CLASSES.headerMain, (props.viewType === VIEW_TYPES.MENU_VIEW ? COMMON_CLASSES.hidden : undefined ))}>
      <div className={CLASSES.pathContainer}>
        {props.path.map((e, index) => <PathElement key={index} separator={index !== pl - 1} index={index} gotoLocation={props.gotoLocation} name={e.name} href={e.href} icon={e.icon}/>)}
      </div>
    </div>
  );
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    gotoLocation: (props) => {
      dispatch(navigateTo(props, props.index));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    path: state.navHeader.path,
    viewType: state.viewType.VIEW_TYPE
  };
};

NavHeader.PropTypes = {
  path: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);