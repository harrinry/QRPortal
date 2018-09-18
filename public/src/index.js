import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { ConnectedRouter } from 'connected-react-router';
//import { Route } from 'react-router';
import store from 'store';
//import history from './history';
import App from 'app/';
import 'common/style.css';
import 'common/keyframes.css';
import './index.scss';

import * as actions from './body-navigation/bn-actions';

window.STORE = store;
window.actions = actions;

window.urlGen = () => {
  const state = store.getState();
  const res = `std=${state.standards.query}&rls=${state.rulesList.query}&rdts=${state.ruleDetails.query}&p=${encodeURI(btoa(JSON.stringify(state.path)))}&lstc=${state.contentBody.listCount}`;
  return res;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('react-root'));
