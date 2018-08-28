import { combineReducers } from 'redux';
import viewTypeReducer from 'view-navigation/vn-reducers';
import mktReducers from 'marketing/mkt-reducers';
import pathNavigationReducers from 'path-navigation/nv-reducers';
import languageReducer from 'language/lang-reducers';
import globalSearchReducer from 'global-search/gs-reducers';
import MenuNavigationReducers from 'menu-navigation/mn-reducers';
import contentBodyReducers from 'body/body-reducers';

const rootReducer = combineReducers({
  viewType: viewTypeReducer,
  marketing: mktReducers,
  path: pathNavigationReducers,
  language: languageReducer,
  search: globalSearchReducer,
  navMenu: MenuNavigationReducers,
  contentBody: contentBodyReducers
});

export default rootReducer;