import { combineReducers } from 'redux';
import navBarReducer from './navBar';
import navItemsReducer from './navItems';
import contentBodyReducer from './contentBody';
import viewTypeReducer from '../view-navigation/vn-reducers';

const rootReducer = combineReducers({
  navBar: navBarReducer,
  navItems: navItemsReducer,
  content: contentBodyReducer,
  viewType: viewTypeReducer
});

export default rootReducer;