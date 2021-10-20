import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const AppRouteLayout = (props) => {
  const { path, component: Component } = props;

  const renderContent = () => (
    <Component {...props} />
  );

  return (
    <Route path={path} render={renderContent} />
  );
};

AppRouteLayout.propTypes = {
  component: PropTypes.any,
};

export default AppRouteLayout;
