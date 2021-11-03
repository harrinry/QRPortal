import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import AppRouteLayout from './crd-app-route-layout-component';
import HomeDefault from './crd-home-default-component';
import HomeContent from './home-content';
import SearchContent from './search-content';

const AppRoutes = () => (
  <Switch>
    <AppRouteLayout
      exact={true}
      path='/'
      component={HomeDefault}
    />
    <AppRouteLayout
      path={[
        '/aip/:ruleType/:ruleId/categories/:categoryId/items/:itemId',
        '/aip/:ruleType/:ruleId/categories/:categoryId',
        '/aip/:ruleType/:ruleId',
        '/aip/:ruleType',
        '/aip',
      ]}
      component={HomeContent}
    />
    <AppRouteLayout
      path={[
        '/carl/:ruleType/:ruleId/categories/:categoryId/items/:itemId',
        '/carl/:ruleType/:ruleId/categories/:categoryId',
        '/carl/:ruleType/:ruleId',
        '/carl/:ruleType',
        '/carl',
      ]}
      component={HomeContent}
    />
    <AppRouteLayout
      path={[
        '/search_term/:searchTerm/search_criterion/:searchCriterion',
        '/search_term/:searchTerm',
      ]}
      component={SearchContent}
    />
  </Switch>
);

AppRoutes.propTypes = {
  isSearchMode: PropTypes.bool,
};

export default AppRoutes;
