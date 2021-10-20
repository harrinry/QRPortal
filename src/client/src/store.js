import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import Cookies from 'js-cookie';
import { decode as atob } from 'base-64';

import sagas from './sagas';
import app from 'app';

import { setAxiosAuthHeader } from './app/crd-app-utils';
import { AUTH_COOKIE_KEY } from 'app/crd-app-constants';

const reducers = combineReducers({
  app: app.reducers,
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore((state = {}, action) => {
    let newState = null;

    const encodedJwt = Cookies.get(AUTH_COOKIE_KEY);

    let castRulesJwt = '';

    if (encodedJwt) {
      castRulesJwt = atob(encodedJwt);
    }

    if (action.type === app.actionsTypes.RESET_REDUX_STORE) {
      // Reset all reducers but these...
      newState = {
        app: state.app,
        isLoggedIn: !!castRulesJwt,
      };
    }

    if (castRulesJwt) {
      setAxiosAuthHeader(castRulesJwt);
    }

    state.app = { ...state.app, isLoggedIn: !!castRulesJwt };
    return reducers(newState || state, action);
  }, middleware);

  sagaMiddleware.run(sagas, store.dispatch);

  return store;
}
