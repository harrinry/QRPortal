import { createStore, applyMiddleware/*, compose*/ } from 'redux';
//import { routerMiddleware, connectRouter } from 'connected-react-router';
//import history from './history';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk));

export default store;
