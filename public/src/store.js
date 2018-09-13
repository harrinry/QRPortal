import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import history from './history';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = createStore(
<<<<<<< HEAD
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))));
=======
  rootReducer,
  applyMiddleware(thunk));
>>>>>>> backend_dev_msu
    
export default store;