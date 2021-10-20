import React from 'react';
import { Switch } from 'react-router-dom';
import AppRouteLayout from './crd-app-route-layout-component';
import HomeDefault from './crd-home-default-component';
import HomeContent from './home-content';

const AppRoutes = () => (
  <Switch>
    <AppRouteLayout
      exact={true}
      path='/'
      component={HomeDefault}
    />
    <AppRouteLayout
      path={[
        '/aip/:ruleType/:subType/items/:categoryId',
        '/aip/:ruleType/:id',
        '/aip/:ruleType',
        '/aip',
      ]}
      component={HomeContent}
    />
  </Switch>
);

export default AppRoutes;
