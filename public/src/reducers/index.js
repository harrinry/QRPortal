import { combineReducers } from 'redux';
import navBarReducer from './navBar';
import navItemsReducer from './navItems';


const rootReducer = combineReducers({
  navBar: navBarReducer,
  navItems: navItemsReducer
});

export default rootReducer;