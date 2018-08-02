import { combineReducers } from 'redux';
import navBarReducer from './navBar';
import navItemsReducer from './navItems';
import contentBodyReducer from './contentBody';
import viewTypeReducer from '../view-navigation/vn-reducers';
import mktReducers from '../marketing/mkt-reducers';
import NavigationHeaderReducers from '../path-navigation/nv-reducers';

const rootReducer = combineReducers({
  navBar: navBarReducer,
  navItems: navItemsReducer,
  content: contentBodyReducer,
  viewType: viewTypeReducer,
  marketing: mktReducers,
  navHeader: NavigationHeaderReducers
});

export default rootReducer;