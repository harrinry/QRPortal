import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ViewNavigation from '../view-navigation/vn-model';
import NavigationHeader from '../path-navigation/nv-model';
import { createClassName } from '../common/lib';
import { VIEW_TYPES } from '../view-navigation/vn-constants';

const NavWrapper = ( props ) => {
  return (
    <div className={createClassName( (props.viewType === VIEW_TYPES.TILES_VIEW ? 'flxr' : 'flxc'), 'txtcenter' )}>
      <ViewNavigation/>
      <NavigationHeader/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.VIEW_TYPE
  };
};

NavWrapper.PropTypes = {
  viewType: PropTypes.string
};

export default connect(mapStateToProps)(NavWrapper);